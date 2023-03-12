import React, { useRef, useState, useEffect } from "react";
import { StyledSignup } from "./Signup.styles";

export default function Signup() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const emailRef = useRef("");

    //get inputs values from userefs
    let username = usernameRef.current.value,
        password = passwordRef.current.value,
        confirmPassword = confirmPasswordRef.current.value,
        email = emailRef.current.value;

    //error description box states
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorDesc, setErrorDesc] = useState([]);

    // individual error flags for inputs
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    ///EMAIL TEST
    function emailFormatValid(emailStr) {
        const emailRegex = new RegExp(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        );
        //test email string with regex
        return emailRegex.test(emailStr);
    }

    ///CHECK FORM FOR ERRORS
    function checkFormForErrors() {
        let errors = [];

        //check email exists and is valid format
        if (!emailFormatValid(email) && email) {
            setEmailError(true);
            errors.push("email format invalid");
        }

        //passwords match check
        if (password !== confirmPassword) {
            setPasswordError(true);
            errors.push("passwords do not match");
        }

        if (errors.length > 0) {
            setErrorFlag(true);
            return errors;
        }

        return [];
    }

    ///SUBMIT FORM
    async function handleSignUp() {
        setErrorFlag(false);
        const formErrors = checkFormForErrors();

        ///form had errors set message to display to user
        if (formErrors.length > 0) {
            setErrorDesc(formErrors);
            return;
        }

        //check if the passwords match before sending
        const result = await fetch("http://localhost:4000/api/signup", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        });

    }

    return (
        <StyledSignup>
            <section className="form-sect">
                <form
                    action="#"
                    onSubmit={() => {
                        handleSignUp();
                    }}>
                    <div className="title">
                        <h2>Welcome to the app</h2>
                    </div>

                    <div className="input-container">
                        {emailError && <span className="error-marker">*</span>}
                        <input
                            className={emailError ? "error-container" : ""}
                            ref={emailRef}
                            onChange={(event) => {
                                email = event.target.value;
                                setEmailError(false);
                            }}
                            id="email"
                            type="text"
                            placeholder="Email@email.com"
                        />
                        {emailError && <span className="error-marker">*</span>}
                    </div>

                    <div className="input-container">
                        {usernameError && (
                            <span className="error-marker">*</span>
                        )}
                        <input
                            className={usernameError ? "error-container" : ""}
                            ref={usernameRef}
                            onChange={(event) => {
                                username = event.target.value;
                            }}
                            id="username"
                            type="text"
                            placeholder="Username"
                            required
                        />
                        {usernameError && (
                            <span className="error-marker">*</span>
                        )}
                    </div>

                    <div className="input-container">
                        {passwordError && (
                            <span className="error-marker">*</span>
                        )}
                        <input
                            className={passwordError ? "error-container" : ""}
                            ref={passwordRef}
                            onChange={(event) => {
                                password = event.target.value;
                                setPasswordError(false);
                            }}
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        {passwordError && (
                            <span className="error-marker">*</span>
                        )}
                    </div>

                    <div className="input-container">
                        {passwordError && (
                            <span className="error-marker">*</span>
                        )}
                        <input
                            className={passwordError ? "error-container" : ""}
                            ref={confirmPasswordRef}
                            onChange={(event) => {
                                confirmPassword = event.target.value;
                                setPasswordError(false);
                            }}
                            id="confirmpassword"
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                        {passwordError && (
                            <span className="error-marker">*</span>
                        )}
                    </div>

                    <div className="submit-btn">
                        <button>Signup</button>
                    </div>
                </form>
                {errorFlag && (
                    <section className="error-container error-desc">
                        <div>
                            <h4>Please correct following errors</h4>
                            <ul>
                                {errorDesc.map((str, index) => {
                                    return <li key={index}>{str}</li>;
                                })}
                            </ul>
                        </div>
                    </section>
                )}
            </section>

            <div className="btn goto-btn">
                <a href="">
                    Already signed<br></br>up login here
                </a>
            </div>
        </StyledSignup>
    );
}
