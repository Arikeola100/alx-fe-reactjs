import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from 'react-router-dom';

export default function Homepage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <div className="container mx-auto p-4 hover:shadow-md sm:bg-blue-500">
            <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                        {/* Wrap the whole recipe card with Link */}
                        <Link to={`/recipe/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-t-lg" />
                            <h2 className="text-gray-900 text-xl font-semibold mt-2 hover:text-green-600">{recipe.title}</h2>
                            <p className="text-gray-600">{recipe.summary}</p>
                        </Link>

            {/* Add Recipe Button */}
            <div className="mb-6">
                <Link to="/add-recipe">
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200">
                        Add New Recipe
                    </button>
                </Link>
            </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
