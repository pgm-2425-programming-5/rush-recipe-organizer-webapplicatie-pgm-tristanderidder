"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
        Recipe Organizer
      </h1>
      <div className="flex justify-center space-x-6">
        <Link
          href="/addRecipes"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          Add Recipe
        </Link>
        <Link
          href="/recipes"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          View Recipes
        </Link>
      </div>
    </nav>
  );
}
