import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    );
}

export default Nav;