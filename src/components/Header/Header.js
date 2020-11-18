import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import BurgerNav from '../BurgerNav/BurgerNav.js'
import UserContext from '../../contexts/userContext';
import addLogo from '../Footer/Images/add-logo.png'
import '../../css/Header.css'
import TokenService from '../../services/token-service';


function Header() {
    const userContext = useContext(UserContext)

    return (
        <header>
            {TokenService.hasAuthToken()
                ? <h1>{userContext.username}</h1>
                : <h1>init</h1>}
            <div className='header-icons'>
                <Link to='/newProject'>
                    <img className='add-logo' src={addLogo} />
                </Link>
                <BurgerNav />
            </div>
        </header>
    )
}

export default Header
