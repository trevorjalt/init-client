import React from 'react';
import hiveFeed from './Images/feed-logo.png';

export default class Footer extends Component {


    renderHiveFeedIcon() {
        return (
            <div className='footer__not-logged-in'>
                <Link
                    to='/feed'
                    className='navItem'
                >
                    <img src={RegisterIcon} alt='Feed link logo' className='navIcon'></img>
                </Link>
                <Link
                    to='/connections'
                    className='navItem'
                >
                    <img src={LoginIcon} alt='connections link logo' className='navIcon'></img>
                </Link>
                <Link
                    to='/buzz'
                    className='navItem'
                >
                    <img src={LoginIcon} alt='Buzz link logo' className='navIcon'></img>
                </Link>
                <Link
                    to='/account'
                    className='navItem'
                >
                    <img src={LoginIcon} alt='Account link logo' className='navIcon'></img>
                </Link>
            </div>
        )
    }
}

<Route path={'/registration'} component={Registration} />

