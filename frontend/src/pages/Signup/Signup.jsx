import React from "react";
import { StyledSignup } from "./Signup.styles";

export default function Signup() {
    let username = "",
        password = "",
        confirmPassword = "",
        email = "";
    let error = "";

    let validEmail = false;
    let passwordsMatch = false;
    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    async function handleSignUp() {
        if (!validEmail && email) {
            error = "email format is invalid";
            console.log("email invalid");
            return;
        }
        if (password !== confirmPassword) {
            error = "passwords do not match";
            console.log("passwords dont match");
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

                    <div className="submit-btn btn">
                        <span>submit</span>
                    </div>
                </form>
            </section>

            <div className="btn goto-btn">
                <a href="">Already signed up login here</a>
            </div>
        </StyledSignup>
    );
}
