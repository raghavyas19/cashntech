import React, { useState, useRef } from 'react';
import logo from "../assets/Logo2.png"
import quote from "../assets/quote.svg"
import fb from "../assets/fb_svg.svg"
import insta from "../assets/instagram_5_x2.svg"
import x_twitter from "../assets/x_svg.svg"
import pint from "../assets/pint_svg.svg"

const EmailOTP = () => {
    const length = 6; // Length of the OTP
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const otpValue = otp.join('');
        console.log("Submitted OTP: ", otpValue);
    };

    return (
        <div class="container">
            <div class="left">
                <div >
                    <img className="logo-img" src={logo} alt="cashntech logo"></img>
                </div>
                <div className="verify-otp">
                    <p className="email-otp-verify">Verify your Email</p>
                    <p className="email-otp-verify-text"><span>We just sent a 6 digit code to </span><span className="email-otp-verify-text-1">john@example.com</span></p>
                </div>
                <div className="otp-verification">
                    <div className="otp-inputs">
                        {otp.map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={otp[index]}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => inputs.current[index] = el}
                                className="otp-input"
                            />
                        ))}
                    </div>
                    <button onClick={handleSubmit} disabled={otp.includes('')} className="login-otp-button">
                        <span class="login-otp-get-verification-code">
                            Verify Code
                        </span>
                    </button>
                </div>
                
                <p className="otp-p-1">
                    <span>Didn't get the OTP ? Resend otp in </span><a href="/" className="otp-span-1" >15 sec</a>
                </p>
                <p className="otp-p-2">
                    <a href="/" >Continue with Mobile No.</a>
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

export default EmailOTP;