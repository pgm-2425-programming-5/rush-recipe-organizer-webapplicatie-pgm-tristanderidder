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
    <section id="recipes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Onze Recepten
        </h2>
        <div className="flex flex-wrap justify-center">
            {recipes.map((recipe) => (
              <RecipeItem key={recipe.name} recipe={recipe} />
            ))}

        </div>
      </div>
    </section>
  );
}
