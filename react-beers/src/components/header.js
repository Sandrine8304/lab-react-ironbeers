import React from 'react';
import { Link } from 'react-router-dom';
import HomePic from "./home-pic.png";

class Header extends React.Component {

    render () {
        return (
            <div className="Header">
                <Link to={"/"} >
                    <img src={HomePic} alt="" />
                </Link>
            </div>
        );
    }
}

export default Header;
