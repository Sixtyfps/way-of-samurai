import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoType = {

}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div>
                <img src="#" alt="image"/>
            </div>

            <div className={s.descriptionBlock}>
                photo + description
            </div>

        </div>
    )
}