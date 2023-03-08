import React, { useRef, useState, useEffect } from "react";
import { StyledSignup } from "./Signup.styles";

export default function Signup() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const emailRef = useRef("");
    // const [validEmail, setValidEmail] = useState(false);

    let username = usernameRef.current.value,
        password = passwordRef.current.value,
        confirmPassword = confirmPasswordRef.current.value,
        email = emailRef.current.value;

    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    const [errorFlag, setErrorFlag] = useState(false);
    const [errorDesc, setErrorDesc] = useState([]);

    // individual error flags
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

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

    async function handleSignUp() {
        setErrorFlag(false);
        const formErrors = checkFormForErrors();

        if (formErrors.length > 0) {
            setErrorDesc(formErrors);
            return;
        }

        const result = await fetch("/api/signup", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                username,
                password,
                confirmPassword,
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
                    <div>
                        <input
                            className={emailError && "error-container"}
                            ref={emailRef}
                            onChange={(event) => {
                                email = event.target.value;
                                // setValidEmail(emailRegex.test(email));
                                setEmailError(false);
                            }}
                            id="email"
                            type="text"
                            placeholder="Email@email.com"
                        />
                    </div>

                    <div>
                        <input
                            className={usernameError && "error-container"}
                            ref={usernameRef}
                            onChange={(event) => {
                                username = event.target.value;
                            }}
                            id="username"
                            type="text"
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div>
                        <input
                            className={passwordError && "error-container"}
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
                    </div>

                    <div>
                        <input
                            className={passwordError && "error-container"}
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
                    </div>

                    <div className="submit-btn">
                        <button>Signup</button>
                    </div>
                </form>
            </section>

            <div className="btn goto-btn">
                <a href="">
                    Already signed<br></br>up login here
                </a>
            </div>
            {errorFlag && (
                <section className="error-container error-desc">
                    <div>
                        <h4>Please correct following errors</h4>
                        <ul>
                            {errorDesc.map((str) => {
                                return <li>{str}</li>;
                            })}
                        </ul>
                    </div>
                </section>
            )}
        </StyledSignup>
    );
}

function emailFormatValid(emailStr) {
    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    return emailRegex.test(emailStr);
}
