import React from 'react';
import "./Navbar.css"


const Navbar = ({changeUrl}) => {

    return (
        <div className="navbar">
            <div className="navbar-btn">
                <button onClick={()=> changeUrl()}>Small</button>
                <button>Big</button>
            </div>
        </div>
    );
};

export default Navbar;