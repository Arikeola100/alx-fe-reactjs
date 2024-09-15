import React, { useState, useEffect } from "react";
import data from "../data.json";

export default function Homepage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <div className="container mx-auto p-4 hover:shadow-md">
            <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-t-lg" />
                        <h2 className="text-gray-900 text-xl font-semibold mt-2 hover:text-green-600">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}