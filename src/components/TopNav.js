import React from 'react';
import './TopNav.css';
import { Link } from "react-router-dom";

function TopNav() {
    return(
        <div className="TopNav">
            <Link className='navElement' to="/"><span>Home</span></Link>
            <Link className='navElement' to="/Profile"><span>Profile</span></Link>
            <Link className='navElement' to="/Settings"><span>Settings</span></Link>
        </div>
    );
}

export default TopNav;