import { CiMail } from "react-icons/ci";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        {/* Page Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-violet-600">Contact Us</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Feel free to reach out to us anytime. We’d love to hear from you!
          </p>
        </header>

        {/* Contact Form Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-2 px-4 rounded-md font-medium shadow-md hover:bg-violet-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Contact Information
            </h2>
            <div className="flex items-center gap-4">
              <CiMail size={24} className="text-violet-600" />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-sm text-gray-600">mkhammad@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <PhoneCall size={24} className="text-violet-600" />
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p className="text-sm text-gray-600">(1234) 567890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-violet-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13 12m0 0l-4.657 4.657m4.657-4.657V6.343m0 5.657L6.343 6.343m10.314 0L12 12m0 0V6.343"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-700">Address</p>
                <p className="text-sm text-gray-600">
                  123 Main Street, Karachi
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block bg-violet-600 text-white py-2 px-6 rounded-md font-medium shadow-md hover:bg-violet-700 text-center"
            >
              Go Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
