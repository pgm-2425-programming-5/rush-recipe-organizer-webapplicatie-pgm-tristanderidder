import fs from "fs/promises";
import path from "path";
import { Recipe } from "../types/Recipes";
import RecipeItem from "../components/RecipeItem";

type RecipeProp = {
  recipes: Recipe[];
}

export default async function Recipes() {
    let data = await fs.readFile(path.join(process.cwd(), "public/data/recipes.json"),"utf-8");

  let recipes: Recipe[] = JSON.parse(data).recipes;

  return (
    <section id="recipes" className="py-10 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Onze Recepten
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
