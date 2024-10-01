import { Recipe } from "../types/Recipes";

export default function RecipeItem({ recipe }: { recipe: Recipe }) {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 duration-300">
      <div className="px-4 py-4 md:px-6 md:py-6">
        <div className="font-bold text-xl md:text-2xl mb-4 text-gray-800">
          {recipe.name}
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Ingredients:
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
          Instructions:
        </h3>
        <ul className="list-decimal list-inside text-gray-600">
          {recipe.instructions.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
