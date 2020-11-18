import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

function OpenNav() {
    return (
        <div>
            <div className='burger-icon'>
                <div className='burger-nav-top burger-nav-top-open burger-nav'></div>
                <div className='burger-nav-bottom burger-nav-bottom-open burger-nav'></div>
            </div>


        </div>
    )
}



function BurgerNav() {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='burger-and-nav' onClick={() => setShowNav(!showNav)}>
            {
                showNav
                    ? <div className='burger-wrapper'>
                        <span className='burger-line burger-line-one'></span>
                        <span className='burger-line burger-line-two'></span>
                        <span className='burger-line burger-line-three'></span>
                    </div>

                    : <Fragment>
                        <div className='burger-wrapper'>
                            <span className='burger-line burger-line-one burger-line-open-one'></span>
                            <span className='burger-line burger-line-two burger-line-open-two'></span>
                            <span className='burger-line burger-line-three burger-line-open-three'></span>
                        </div>

                        <nav role='navigation'>
                            <span className='navigation-item nav-item-one'>
                                <Link to='/login' className='navigation-link'>Login</Link>
                            </span>
                            <span className='navigation-item nav-item-two'>
                                <Link to='/register' className='navigation-link'>Sign up</Link>
                            </span>
                        </nav></Fragment>
            }



            {/* {showNav
                ? <OpenNav />
                : <CloseNav />
            } */}
        </div>
    )
}

export default BurgerNav




