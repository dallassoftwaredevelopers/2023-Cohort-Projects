const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    ingredientsList: {type: {String, String}, required: true},
    stepsList: {type: [String], required: true},
    cuisineType: String,
    category: String,
    rating: Number
}, {
    timestamps: true
})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;