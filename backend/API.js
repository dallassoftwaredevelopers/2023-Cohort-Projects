require('dotenv').config();
const axios = require('axios');

module.exports = {
    searchRecipe: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            res.status(200).json(data);
    
        }catch(error){
            res.status(400).json(error);
        }
    },
    searchRecipeByNutrients: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            res.status(200).json(data);
    
        }catch(error){
            res.status(400).json(error);
        }
    },
    searchRecipeByIngredients: async(ingredientsListApi) => {
        try{
            // console.log(encodeURIComponent(ingredientsListApi));
            const res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsListApi}&apiKey=${process.env.API_KEY}`)
            // console.log(res)
            // console.log(res.status);
            return res
        }catch(error){
            res.status(400).json(error);
        }  
    },
    getSimilarRecipes: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/{id}/similar?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            res.status(200).json(data);
    
        }catch(error){
            res.status(400).json(error);
        }  
    },
    searchIngredients: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            res.status(200).json(data);
    
        }catch(error){
            res.status(400).json(error);
        }  
    },

}