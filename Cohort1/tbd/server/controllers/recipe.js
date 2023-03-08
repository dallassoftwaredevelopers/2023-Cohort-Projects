const express = require('express');
const Recipe = require('../models/recipes');

const router = express.Router();

//Index (GET all)
router.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        // console.log('search terms are: ' + req.query.q);
        // console.log(typeof(req.query.q))
        res.json(recipes);

    } catch (err) {
        res.json({ err });
    }
})

///api/recipes?q=ingredients[ingredient 1, ingredient 2]

module.exports = router;