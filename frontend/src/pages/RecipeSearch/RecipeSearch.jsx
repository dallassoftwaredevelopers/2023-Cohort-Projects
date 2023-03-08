import React from 'react'
import { StyledRecipeSearch } from './RecipeSearch.styles'

const RecipeSearch = () => {
    return (
    <StyledRecipeSearch>
        <div className='title'>
            <h1>Recipe Search</h1>
        </div>
            <div className='search'>
                <input type="text" placeholder='What are you in the mood for?' />
                <button>Search</button>
            </div>
           
            <div className='filter'>
                <span>Filter</span>
                <form action="">
                    <label htmlFor=""></label>
                </form>
            </div>

        <div className='searchResults'>
            <h2>Results go here...</h2>
            {/* Result Components Here */}
        </div>
    </StyledRecipeSearch>
    )
  }

  export default RecipeSearch;