import React from "react";

type NavbarType = {}

export const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className='nav'>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}