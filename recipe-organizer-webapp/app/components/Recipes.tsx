import React from 'react';

interface RecipeProps {
    name: string;
    ingredients: string[];
    instructions: string;
    category: string;
}

const Recipe: React.FC<RecipeProps> = ({ name, ingredients, instructions, category }) => {
    return (
        <div className="recipe">
            <h2>{name}</h2>
            <p><strong>Category:</strong> {category}</p>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{instructions}</p>
        </div>
    );
};

export default Recipe;