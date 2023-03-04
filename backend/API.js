require('dotenv').config();

module.exports = {
    searchRecipe: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            console.log(data)
    
        }catch(error){
            console.log(error)
        }
    },
    searchRecipeByNutrients: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            console.log(data)
    
        }catch(error){
            console.log(error)
        }
    },
    searchRecipeByIngredients: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            console.log(data)
    
        }catch(error){
            console.log(error)
        }  
    },
    getSimilarRecipes: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/{id}/similar?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            console.log(data)
    
        }catch(error){
            console.log(error)
        }  
    },
    searchIngredients: async(req, res) => {
        try{
            const res = await fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.API_KEY}`)
            const data = await res.json()
            console.log(data)
    
        }catch(error){
            console.log(error)
        }  
    },

}