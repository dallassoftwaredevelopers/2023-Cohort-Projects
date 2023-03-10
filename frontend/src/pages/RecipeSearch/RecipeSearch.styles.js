import styled from "styled-components";

export const StyledRecipeSearch = styled.section`
    background-color: white;
    color: #242424;
    height: 100vh;
    & .title {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .search {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px){
            flex-direction: column;
        }
    }
    & form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
    & form input {
        background-color: white;
        color: #242424;
        border-radius: 2em;
        border: 1px solid #242424;
        padding: 1em;
        width: 100%;
        @media (max-width: 768px){
            width: 50%;
        }
    }
    & .filter{
        border: 1px solid #242424;
        width: 15%
    }
    & .searchResults {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

