const express = require("express");
const { send } = require("process");
const API = require("./API");
const router = express.Router();
const { createUser, login } = require('./controllers/userController.js');


router.get("/searchbyingredient", async (req, res) => {
    const ingredientsList = req.query.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //get data from api
    try {
        let ingredientsListApi = encodeURIComponent(ingredientsList.replace(/,/g, ',+'));
        const recipes = await API.searchRecipeByIngredients(ingredientsListApi);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
});

router.post('/signup', createUser);

router.post('/login', login);

//test route to localhost:4000/api/
router.get('/', (req, res) => {
    try {
        res.json({msg: 'test GET request working'});
    } catch(error) {
        res.status(400).json({error: 'something went wrong'});
    }
});


module.exports = router;