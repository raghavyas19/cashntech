import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/loginemail">Login using email</Link></li>
                <li><Link to="/loginmob">Login using mobile number</Link></li>
            </ul>
        </div>
    );
}

export default Nav;