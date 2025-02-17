import Link from "next/link";
import React from "react";

const CancelPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Cancel Icon */}
        <div className="flex justify-center">
          <svg
            className="w-16 h-16 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Cancel Message */}
        <h1 className="mt-6 text-2xl md:text-3xl font-bold text-gray-800">
          Payment Canceled
        </h1>
        <p className="mt-4 text-gray-600">
          Your payment was not completed. If you have any issues, please contact support.
        </p>

        {/* Testing App Message */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">
            This is a testing app. It will be a production-grade website very soon!
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CancelPage;