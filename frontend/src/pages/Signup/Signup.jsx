import React from "react";
import { StyledSignup } from "./Signup.styles";

export default function Signup() {
    let username = "",
        password = "",
        confirmPassword = "",
        email = "";

    let validEmail = false;
    let passwordsMatch = false;
    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    async function handleSignUp() {
        console.log(username, password, email, confirmPassword);
        console.log("valid email? ", validEmail);
        console.log("passwords match ? ", passwordsMatch);

        // const result = await fetch(API_URL, {
        //     method: "post",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ TEST: "OBJECT" }),
        // });
    }

    return (
        <StyledSignup>
            <div className="title">
                <h2>Welcome to the app</h2>
            </div>
            <form
                action="#"
                onSubmit={() => {
                    handleSignUp();
                }}>
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

                <div className="submit-btn">
                    <input type="submit" />
                </div>
            </form>

            <div className="btn">
                <a href="">Already signed up login here</a>
            </div>
        </StyledSignup>
    );
}
