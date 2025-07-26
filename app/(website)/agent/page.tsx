// app/page.tsx
"use client";

import { useState, FormEvent } from "react";

export default function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add a placeholder for the assistant's response
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      if (!response.body) {
        throw new Error("Response body is null");
      }
      console.log("response", response)

      const reader = response.body.getReader();
      console.log("reader", reader)
      const decoder = new TextDecoder();


      while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value, { stream: true });
  const lines = chunk.split("\n\n");

  for (const line of lines) {
    if (line.startsWith("data: ")) {
      const data = line.substring(6);
      if (data === "[DONE]") {
        setIsLoading(false);
        return;
      }
      console.log(data)

      setMessages((prev) => {
        const lastIndex = prev.length - 1;
        const lastMessage = prev[lastIndex];

        if (lastMessage && lastMessage.role === "assistant") {
          // Return a new array with updated assistant message (immutable)
          const updatedMessage = {
            ...lastMessage,
            content: lastMessage.content + data,
          };
          return [...prev.slice(0, lastIndex), updatedMessage];
        }

        return prev;
      });
    }
  }
}

    } catch (error) {
      console.error("Error fetching stream:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto py-24">
      <div className="flex-grow mb-4">
        {messages.map((m, i) => (
          <div key={i} className="whitespace-pre-wrap">
            <strong>{m.role === "user" ? "You" : "Assistant"}:</strong> {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}