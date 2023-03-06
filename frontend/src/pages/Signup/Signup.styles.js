import styled from "styled-components";

export const StyledSignup = styled.section`
    width: max(50%, 400px);
    padding: 0%;
    border-radius: 20px;
    margin: 0 auto;

    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: black;
        width: 90%;
        margin: 0 auto;
    }
    & .form-sect {
        width: 100%;
    }
    & form {
        position: relative;
        display: flex;
        background: gray;
        flex-direction: column;
        align-items: center;
        border: solid black 2px;
        padding: 10%;
        border-radius: 20px;
    }

    & form div {
        width: 90%;
        margin: 0 auto;
        /* border: solid black 1px; */
    }

    & form input {
        text-align: center;
        margin: 2% auto;
        font-size: 1.5rem;
        border-radius: 10px;
        width: 100%;
    }

    & form div.title {
        border-color: red;
        position: absolute;
        top: -8%;
        background-color: green;
        border-radius: 5px;
        padding: 1%;
    }

    & .btn {
        padding: 10px;
        color: #000000;
        width: 25%;
        border: 2px solid green;
        background-color: green;
        border-radius: 20px;
        font-size: 10px;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: #095509;
    }

    & .submit-btn button {
        position: absolute;
        bottom: -6%;
        right: 15%;
        font-size: 1.2rem;
        padding: 2%;
    }
    & .submit-btn button {
        background: green;
    }
    & .submit-btn button:hover {
        background: #095509;
    }

    & .goto-btn {
        padding: 0;
        width: 40%;
        margin-top: 5%;
        font-size: 1rem;
    }

    & .error-container {
        background: red;
    }
`;
