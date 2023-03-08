import React, { useRef, useState, useEffect } from "react";
import { StyledSignup } from "./Signup.styles";

export default function Signup() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const emailRef = useRef("");

    let username = usernameRef.current.value,
        password = passwordRef.current.value,
        confirmPassword = confirmPasswordRef.current.value,
        email = emailRef.current.value;

    let validEmail = false;
    let passwordsMatch = false;

    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    const [errorFlag, setErrorFlag] = useState(false);
    const [errorDesc, setErrorDesc] = useState("no error");

    async function handleSignUp() {
        let error = "no error";
        setErrorDesc(error);
        setErrorFlag(false);

        if (!username) {
            error = "username cannot be blank";
            setErrorFlag(true);
            setErrorDesc(error);
            return;
        }

        if (!validEmail && email) {
            error = "email format is invalid";
            console.log("email invalid");
            setErrorFlag(true);
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
            console.log(error, password, confirmPassword);
            setErrorFlag(true);
            setErrorDesc(error);
            return;
        }

        console.log(
            "sending post ",
            email,
            username,
            password,
            confirmPassword
        );
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
                            ref={emailRef}
                            onChange={(event) => {
                                email = event.target.value;
                                validEmail = emailRegex.test(email);
                            }}
                            id="email"
                            type="text"
                            placeholder="Email@email.com"
                        />
                    </div>

                    <div>
                        <input
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
                            ref={passwordRef}
                            onChange={(event) => {
                                password = event.target.value;
                                passwordsMatch = confirmPassword === password;
                            }}
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div>
                        <input
                            ref={confirmPasswordRef}
                            onChange={(event) => {
                                confirmPassword = event.target.value;
                                passwordsMatch = confirmPassword === password;
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
                <section className="error-container">
                    <div>
                        <h4>Please correct following errors</h4>
                        <span>{errorDesc}</span>
                    </div>
                </section>
            )}
        </StyledSignup>
    );
}
