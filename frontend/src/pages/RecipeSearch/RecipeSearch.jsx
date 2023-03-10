import React, { useRef, useState, useEffect} from 'react'
import { StyledRecipeSearch } from './RecipeSearch.styles'
import axios from 'axios';


export default function RecipeSearch() {
    // State for Ingredient
    const [ingredients, setIngredients] = useState("")

    // List of Ingredients
    const ingredientRef = useRef("")
    // let Ingredients = ingredientRef.current.value

    async function handleSubmit() {
        try {
            const result = await axios.get('http://localhost:4000/api/searchbyingredient', {
                params: {
                    ingredients: ingredients
                }
            })
            const data = result.data
            console.log(data);
            
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
                {ingredients}
            </div>
           
            <div className='filter'>
                <span>Filter</span>
                <form action="">
                    <label htmlFor=""></label>
                </form>
            </div>

        <div className='searchResults'>
            <h2>Results go here...</h2>
            
        </div>
    </StyledRecipeSearch>
    )
} 

