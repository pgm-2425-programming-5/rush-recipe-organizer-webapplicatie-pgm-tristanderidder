"use client";
import React, { useState } from 'react';

const AddRecipeForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        category: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Recipe Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <input
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="instructions">Instructions:</label>
                <input
                    type="text"
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                </select>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;