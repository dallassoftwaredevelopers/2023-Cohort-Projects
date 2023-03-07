const express = require("express");
const API = require("./API");
const router = express.Router();

// sample route
// a  route like this would fire
router.get("/", (req, res) => {
    try {
        res.json({ msg: "test GET request working" });
    } catch (error) {
        res.status(400).json({ error: "something went wrong" });
    }
});

router.get("/searchbyingredient", async (req, res) => {
    const ingredientsList = req.body.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //get data from api
    try {
        const recipes = await API.searchRecipeByIngredients(ingredientsList);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
});

/** SAMPLE ROUTES
 * a route like this would fire when going to /api/recipes because /api/ is defined as the route precursor in server.js
 *
 * GET all recipes
 * router.get('/', (res, req) => {
 *      res.json();
 * });
 *
 * GET one recipe
 * router.get('/:id', (res, req) => {
 *      res.json();
 * })
 */

module.exports = router;
