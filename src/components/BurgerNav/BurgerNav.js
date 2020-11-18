import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

function BurgerNav() {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='burger-and-nav' >
            {
                showNav
                    ? <div
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={e => e.key === 'Enter' ? setShowNav(!showNav) : null}
                        className='burger-wrapper'
                        tabIndex='0'
                        role='button' aria-label='navigation-menu-clickable' aria-expanded='false'>

                        <span className='burger-line burger-line-one'></span>
                        <span className='burger-line burger-line-two'></span>
                        <span className='burger-line burger-line-three'></span>
                    </div >

                    : <Fragment>
                        <div
                            onClick={() => setShowNav(!showNav)}
                            onKeyDown={e => e.key === 'Enter' ? setShowNav(!showNav) : null}
                            className='burger-wrapper'
                            tabIndex='0'
                            role='button'
                            aria-label='navigation-menu-clickable'
                            aria-expanded='true'>

                            <span className='burger-line burger-line-one burger-line-open-one'></span>
                            <span className='burger-line burger-line-two burger-line-open-two'></span>
                            <span className='burger-line burger-line-three burger-line-open-three'></span>
                        </div>

                        <nav
                            role='navigation'
                            className='navigation'
                            aria-live='assertive'
                            aria-relevant='all'>

                            <span className='navigation-item nav-item-one'>
                                <Link to='/login' className='navigation-link'>
                                    Login
                                    </Link>
                            </span>


                            <span className='navigation-item nav-item-two'>
                                <Link to='/register' className='navigation-link'>
                                    Sign up
                                    </Link>
                            </span>

                        </nav>
                    </Fragment>
            }

        </div >
    )
}

export default BurgerNav




