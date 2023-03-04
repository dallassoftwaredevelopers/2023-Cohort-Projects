import styled from "styled-components";

export const StyledSignup = styled.section`
    background-color: gray;
    width: max(50vw, 400px);
    padding: 10%;
    border-radius: 20px;
    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        background-color: red;
        color: black;
    }
    & form {
        display: flex;
        flex-direction: column;
    }
    & input {
        text-align: center;
        margin: 2% 0;
        font-size: 1.5rem;
        border-radius: 10px;
    }

    & .btn {
        padding: 10px;
        background-color: green;
        color: #000000;
        width: 25%;
        border-radius: 20px;
        font-size: 10px;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: #095509;
    }
`;
