import React, { useRef, useState, useEffect} from 'react'
import { StyledRecipeSearch } from './RecipeSearch.styles'
import axios from 'axios';


export default function RecipeSearch() {
    // State for Ingredient
    const [ingredients, setIngredients] = useState("");
    const [ recipeList, setRecipeList ] = useState([]);
    // List of Ingredients
    const ingredientRef = useRef("");

    async function handleSubmit() {
        try {
            debugger;
            const result = await axios.get('http://localhost:4000/api/searchbyingredient', {
                params: {
                    ingredients: ingredients
                }
            });

            if(result?.data) {
                setRecipeList(result.data);
            }
            
        }catch(err){
            console.log(err);
        }
    }

    return (
    <StyledRecipeSearch>
        <div className='title'>
            <h1>Recipe Search</h1>
        </div>
            <div className='search'>
                <form 
                    action='#'
                    onSubmit={() => {
                    handleSubmit();
                    }}>
                    <input 
                        ref={ingredientRef}
                        onChange={(event) => setIngredients(event.target.value)}
                        id= "ingregients"
                        value={ingredients}
                        type="text" 
                        placeholder='What are you in the mood for?'
                    />
                    <button>Search</button>
                </form>

            </div>

            <div>
                { ingredients }
            </div>
           
            <div className='filter'>
                <span>Filter</span>
                <form action="">
                    <label htmlFor=""></label>
                </form>
            </div>

        <div className='searchResults'>
            <h2>Results go here...</h2>
            
            {/* testing recipeList results */}
            { recipeList ? recipeList.map(recipe => (
                <div> {recipe.title}</div>
            )): null }
            
        </div>
    </StyledRecipeSearch>
    )
} 

