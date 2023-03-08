const mongoose = require("../server/models/connection");
// require("./connection");
const Recipe = require("../server/models/recipes");
// require("./recipes");

const db = mongoose.connection;

db.on("open", () => {
    const startRecipes = [
        {
            title: "Peanut Butter and Jelly Sandwich",
            description: "pretty self-explanatory",
            ingredientsList: [
                {quantity: "2 slices", ingredientName: "bread"}, 
                {quantity: "2 Tbsp", ingredientName: "peanut butter"},
                {quantity: "2 Tbsp", ingredientName: "jelly"}
            ],
            stepsList: [
                "place 2 slices bread on plate", 
                "spread peanut butter on on slice",
                "spread jelly on the other slice",
                "put the slices together with the peanute butter and jelly facing each other"
            ],
            cuisineType: "American",
            category: "snack",
            rating: 5
        }

    ]

    Recipe.deleteMany({}).then((data) => {
        // seed starter receipes
        Recipe.create(startRecipes).then((data) => {
            // log the recipes
            console.log('data', data);
            db.close();
        })
        .catch((error) => {
            console.log(error);
            db.close();
        })
    })

})