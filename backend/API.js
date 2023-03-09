require('dotenv').config();

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
    searchRecipeByIngredients: async(req, res) => {
        let ingredientsList = ingredientsList
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?${ingredientsList}&apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            res.status(200).json(data);
    
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