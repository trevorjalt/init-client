import React from 'react';
import HiveFeed from './Images/feed-logo.png';
import Swarm from './Images/connect-logo.png';
import Buzz from './Images/notification-logo.png';
import Account from './Images/profile-logo.png';

export default class Footer extends Component {


    renderHiveFeedIcon() {
        return (
            <div className='footer__logged-in'>
                <Link
                    to='/feed'
                    className='navItem'
                >
                    <img src={HiveFeed} alt='Feed link logo' className='navIcon'></img>
                </Link>
                <Link
                    to='/connections'
                    className='navItem'
                >
                    <img src={Swarm} alt='connections link logo' className='navIcon'></img>
                </Link>
                <Link
                    to='/buzz'
                    className='navItem'
                >
                    <img src={Buzz} alt='Buzz link logo' className='navIcon'></img>
                </Link>
                <Link
                    to='/account'
                    className='navItem'
                >
                    <img src={Account} alt='Account link logo' className='navIcon'></img>
                </Link>
            </div>
        )
    }
}


