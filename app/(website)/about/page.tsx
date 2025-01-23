import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-violet-600">About Us</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Learn more about our journey and vision.
          </p>
        </header>

        <section className="text-center bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Building...
          </h2>
          <p className="text-gray-700">
            We are working hard to create an amazing experience for you. Stay
            tuned for updates!
          </p>
        </section>

        <footer className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block bg-violet-600 text-white py-2 px-6 rounded-md font-medium shadow-md hover:bg-violet-700"
          >
            Go Back to Home
          </Link>
        </footer>
      </div>
    </main>
  );
}
