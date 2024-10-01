"use client";
import React, { useState } from 'react';
import Recipe from "../components/Recipes";

export default function Recipes() {
  const [category, setCategory] = useState<string | null>(null);

  const recipes = [
    { name: "Pancakes", ingredients: ["flour", "milk", "eggs"], instructions: "Mix everything together and bake in a pan.", category: "Breakfast" },
    { name: "Spaghetti", ingredients: ["pasta", "tomato sauce", "meat"], instructions: "Cook pasta and mix with sauce and meat.", category: "Dinner" },
  ];

  const filteredRecipes = category ? recipes.filter(recipe => recipe.category === category) : recipes;

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <button onClick={() => setCategory(null)}>All</button>
        <button onClick={() => setCategory("Breakfast")}>Breakfast</button>
        <button onClick={() => setCategory("Dinner")}>Dinner</button>
      </div>
      {filteredRecipes.map((recipe, index) => (
        <Recipe
          key={index}
          name={recipe.name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          category={recipe.category}
        />
      ))}
    </div>
  );
}
