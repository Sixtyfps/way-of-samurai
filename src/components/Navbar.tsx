import React from "react";
import './Navbar.module.css'
import s from "./Navbar.module.css";

type NavbarType = {}

export const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="#">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="#">Messages</a>
            </div>
            <div className={s.item}>
                <a href="#">News</a>
            </div>
            <div className={s.item}>
                <a href="#">Music</a>
            </div>
            <div className={s.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}