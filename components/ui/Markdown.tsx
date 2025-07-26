import ReactMarkdown from 'react-markdown'

export default function MarkdownRenderer({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => (
          <h1 className="text-xl font-bold jon text-violet-950 text- my-4" {...props} />
        ),
        h2: (props) => (
          <h2 className="text-lg font-semibold jon text-violet-950 my-3" {...props} />
        ),
        p: (props) => (
          <p className="text-base  mb-2" {...props} />
        ),
        ul: (props) => (
          <ul className="list-disc pl-6 mb-2" {...props} />
        ),
        li: (props) => (
          <li className="mb-1" {...props} />
        ),
        strong: (props) => (
          <strong className="font-semibold" {...props} />
        ),
        a: (props) => (
          <a
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}
