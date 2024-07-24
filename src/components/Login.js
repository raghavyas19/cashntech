import React from "react";
import logo from "./Logo2.png"

const SignUp = () => {

    return (
        <div class="container">
            <div class="left">
                <div >
                    <img className="logo-img"src={logo} alt="cashntech logo"></img>
                </div>
                <div className="form-1">
                    <h1 class="welcome-to-cashntech">Welcome to CashnTech</h1>
                    <h3>Unlock Your Eligibility Now</h3>
                </div>
                <div className="email-box-1">
                    <label className="email-label">Enter your email address</label>
                    <input type="text" placeholder="john@example.com" className="email-input"></input>
                </div>
                <button class="button">
                    <span class="get-verification-code">
                        Get Verification Code
                    </span>
                </button>
                <div class="or-line">
                    <div class="line-1">
                    </div>
                    <span class="or">
                        or
                    </span>
                    <div class="line-2">
                    </div>
                </div>
                <div >
                    <button className="button-1">
                        <span className="button-1-text">Continue with Mobile No.</span>
                    </button>
                </div>
                <p className="p-1">
                    <span>Already have an account ?</span><a href="/" className="span-1" >Log in</a>
                </p>
                <p className="p-2">
                    By Signing in, you agree to our <a href="/" className="span-2">Privacy Policy</a> and <a href="/" className="span-2">Terms of services</a>
                </p>
                <span class="copyright-text">
                    Copyright 2024, CashnTech Pvt Ltd., All Rights Reseved
                </span>
            </div>


            <div class="right">
            </div>
        </div>
    )
};

export default SignUp;