import React from "react";

type ProfileType = {}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className='content'>
            <img src="#" alt="image"/>
            <div>
                photo + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                    <div>post 4</div>
                </div>
            </div>
        </div>
    )
}