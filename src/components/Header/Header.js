import React, { useState, useContext, Fragment } from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture/ProfilePicture'
import BurgerNav from '../BurgerNav/BurgerNav.js'
import UserContext from '../../contexts/userContext';
import '../../css/Header.css'

function Header() {
    const userContext = useContext(UserContext)

    return (
        <header>
            <h1>init</h1>
            <div className='header-icons'>
                {userContext.user.profileImage
                    ? < ProfilePicture image={userContext.user.profileImage} />
                    : null
                }
                <BurgerNav />
            </div>
        </header>
    )
}

export default Header
