import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const length = 6; // Length of the OTP
  const inputs = [];

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return false;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join(''));

    if (value !== '' && index < length - 1) {
      inputs[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.keyCode === 8 && otp[index] === '' && index !== 0) {
      inputs[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    // Handle OTP submission
    console.log("Submitted OTP: ", otp);
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index] || ''}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(input) => inputs[index] = input}
              style={{
                width: '24px',
                height: '24px',
                textAlign: 'center',
                fontSize: '20px',
                border: '1px solid black',
                borderRadius: '5px'
              }}
            />
          ))}
      </div>
      <button onClick={handleSubmit} disabled={otp.length < length}>
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerification;
