import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

function OpenNav() {
    return (
        <div>
            <div className='burger-icon'>
                <div className='burger-nav-top burger-nav-top-open burger-nav'></div>
                <div className='burger-nav-bottom burger-nav-bottom-open burger-nav'></div>
            </div>

            <nav role='navigation'>
                <span className='navigation-item'>
                    <Link to='/login' className='navigation-link'>Login</Link>
                </span>
                <span className='navigation-item'>
                    <Link to='/register' className='navigation-link'>Sign up</Link>
                </span>
            </nav>
        </div>
    )
}

function CloseNav() {
    return (
        <div className='burger-icon'>
            <div className='burger-nav-top burger-nav'></div>
            <div className='burger-nav-middle burger-nav'></div>
            <div className='burger-nav-bottom burger-nav'></div>
        </div>
    )
}

function BurgerNav() {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='burger-and-nav' onClick={() => setShowNav(!showNav)}>
            {showNav
                ? <OpenNav />
                : <CloseNav />
            }
        </div>
    )
}

export default BurgerNav




