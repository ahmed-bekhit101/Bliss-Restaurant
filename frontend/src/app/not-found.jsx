import React from 'react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-7xl font-bold text-red-900 mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-block bg-red-900 text-white px-6 py-3 rounded-full hover:bg-red-800 transition text-sm font-medium">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
