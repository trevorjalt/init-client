import React, { useState, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom';
import BurgerNav from '../BurgerNav/BurgerNav.js'
import UserContext from '../../contexts/userContext';
import addLogo from '../Footer/Images/add-logo.png'
import '../../css/Header.css'

function Header() {
    const userContext = useContext(UserContext)

    return (
        <header>
            <h1>init</h1>
            <div className='header-icons'>
                <Link to='/newProject'><img className='add-logo' src={addLogo} /></Link>
                <BurgerNav />
            </div>
        </header>
    )
}

export default Header
