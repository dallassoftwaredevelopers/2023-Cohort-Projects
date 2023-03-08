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
    const [errorDesc, setErrorDesc] = useState("no error");

    // individual error flags
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        console.log("username error", usernameError);
        console.log("emailError error", emailError);
        console.log("passwordError error", passwordError);
        // console.log("valid email ", validEmail);
    });

    async function handleSignUp() {
        console.log(username, password, email);
        let error = "no error";
        setErrorDesc(error);
        setErrorFlag(false);
        let validEmail = emailFormatValid(email);

        if (!username) {
            error = "username cannot be blank";
            setUsernameError(true);
            setErrorDesc(error);
            return;
        }
        if (!validEmail && email) {
            error = "email format is invalid";
            setEmailError(true);
            setErrorDesc(error);
            return;
        }

        if (password !== confirmPassword || (!password && !confirmPassword)) {
            if (password !== confirmPassword) {
                error = "passwords do not match";
            }
            if (!password && !confirmPassword) {
                error = "password or confirmPassword cannot be blank";
            }
            setPasswordError(true);
            setErrorFlag(true);
            setErrorDesc(error);
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
                        <span>{errorDesc}</span>
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
