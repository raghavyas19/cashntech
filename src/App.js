import './App.css'
import React from 'react';
// import PhoneInputWithCountryCode from './components/PhoneInputWithCountryCode';
// import Nav from './components/Nav'
import LoginEmail from './components/LoginEmail'
import LoginMob from './components/LoginMob'
import EmailOTP from './components/EmailOTP'
import MobileOTP from './components/MobileOTP'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* < Nav /> */}

        <Routes>
          <Route path="/loginemail" element={<LoginEmail />} />
          <Route path="/loginmob" element={<LoginMob />} />
          <Route path="/emailotp" element={<EmailOTP />} />
          <Route path="/mobileotp" element={<MobileOTP />} />
        </Routes>
      </BrowserRouter>
      
    </div>

  )
}

export default App;
