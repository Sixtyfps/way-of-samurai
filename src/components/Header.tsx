import React from "react";
import s from './Header.module.css';

type HeaderType = {

}

export const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <img src="#" alt="image"/>
        </header>
    )
}