import { Recipe } from "../types/Recipes";

export default function RecipeItem({ recipe }: { recipe: Recipe }) {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.name}</div>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <ul className="list-decimal list-inside mt-4">
          {recipe.instructions.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
