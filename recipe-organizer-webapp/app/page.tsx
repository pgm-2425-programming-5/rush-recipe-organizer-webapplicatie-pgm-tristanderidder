'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-10 px-4 md:px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Recipe Organizer
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
        Organiseer jouw recepten!
      </h2>
      <Link
        href="/recipes"
        className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Check de recepten!
      </Link>
    </div>
  );
}
