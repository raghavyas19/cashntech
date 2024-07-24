import React from "react"
import logo from "../assets/Logo2.png"
import quote from "../assets/quote.svg"
import fb from "../assets/fb_svg.svg"
import insta from "../assets/instagram_5_x2.svg"
import x_twitter from "../assets/x_svg.svg"
import pint from "../assets/pint_svg.svg"

const LoginEmail = () => {

    return (
        <div class="container">
            <div class="left">
                <div >
                    <img className="logo-img" src={logo} alt="cashntech logo"></img>
                </div>
                <div className="form-1">
                    <h1 class="welcome-to-cashntech">Welcome to CashnTech</h1>
                    <h3>Unlock Your Eligibility Now</h3>
                </div>
                <div className="login-email-box-1">
                    <label className="login-email-label">Enter your email address</label>
                    <input type="text" placeholder="john@example.com" className="login-email-input"></input>
                </div>
                <button class="login-button">
                    <span class="login-get-verification-code">
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
                <div className="right-img-div">
                    <img src={quote} className="quote-img" alt="" ></img>
                </div>
                <div class="right-text-1">
                    An End-to-end Supply Chain Finance Solution
                    <div className="p-text">
                        CashnTech is a cloud-based working capital FinTech solution provider to obtain streamlined financial aid
                    </div>
                </div>
                <div className="icon-socials">
                    <img src={fb} className="icon-img" alt="facebook"></img>
                    <img src={insta} className="icon-img" alt="instagram"></img>
                    <img src={x_twitter} className="icon-img" alt="x.com"></img>
                    <img src={pint} className="icon-img" alt="pinterest"></img>
                </div>
            </div>
        </div>
    )
};

export default LoginEmail;