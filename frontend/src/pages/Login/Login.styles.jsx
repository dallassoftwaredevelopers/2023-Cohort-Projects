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

    & .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & form input {
        text-align: center;
        margin: 2% auto;
        font-size: 1.5rem;
        border-radius: 10px;
        width: 80%;
    }

    & form div.title {
        text-align: center;
        border-color: red;
        position: absolute;
        top: -8%;
        width: 90%;
        left: 4%;
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

    & .input-container {
        position: relative;
    }

    & .input-tag {
        color: #570f0f;
        position: absolute;
        bottom: 0px;
        right: 0;
    }
    & .goto-btn {
        padding: 1%;
        width: 40%;
        margin-top: 5%;
        font-size: 1rem;
        text-align: center;
    }

    & .error-container {
        background: #ce4d4d;
        border: solid 2px red;
    }

    & .error-desc {
        border-radius: 10px;
        padding: 10px;
    }

    & .error-marker {
        font-size: 2rem;
        color: black;
    }
`;
