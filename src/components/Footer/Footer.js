import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import HiveFeed from './Images/feed-logo.png';
import Swarm from './Images/connect-logo.png';
import Buzz from './Images/notification-logo.png';
import Account from './Images/profile-logo.png';
//import TokenService from  '../(../services/token-service';

export default function Footer() {
    // const userContext = useContext(UserContext);
    // toggle on login status:
    // function renderFooterLoggedIn() {
    //     return (
    //         <div className='Footer__logged-in'>
    //             <Link
    //                 to='/feed'
    //                 className='navItem'
    //             >
    //                 <img src={HiveFeed} alt='Feed link logo' className='navIcon'></img>
    //             </Link>
    //             <Link
    //                 to='/connections'
    //                 className='navItem'
    //             >
    //                 <img src={Swarm} alt='connections link logo' className='navIcon'></img>
    //             </Link>
    //             <Link
    //                 to='/buzz'
    //                 className='navItem'
    //             >
    //                 <img src={Buzz} alt='Buzz link logo' className='navIcon'></img>
    //             </Link>
    //             <Link
    //                 to='/Portfolio'
    //                 className='navItem'
    //             >
    //                 <img src={Account} alt='Account link logo' className='navIcon'></img>
    //             </Link>
    //         </div>
    //     )
    // };

    // function renderLoggedOut() {
    //     return (
    //         <div className='Footer__logged-in'>
    //             <Link
    //                 to='/login'
    //                 className='navItem'
    //             >
    //                 <img src={Account} alt='Account link logo' className='navIcon'></img>
    //                 <p className='navItem__text'>logIn</p>
    //             </Link>
    //         </div>
    //     )
    // }


    return (
        <div className='FooterWrapper'>
            <ul className='Footer'>                          
                {/* {TokenService.hasAuthToken()
                    ? this.renderFooterLoggedIn()
                    : this.renderLoggedOut()}*/}
                <li><Link
                        to='/feed'
                        className='navItem'
                    >
                        <img src={HiveFeed} alt='Feed link logo' className='navIcon'></img>
                    </Link></li>
                <li><Link
                        to='/connections'
                        className='navItem'
                    >
                        <img src={Swarm} alt='connections link logo' className='navIcon'></img>
                    </Link></li>
                <li><Link
                        to='/buzz'
                        className='navItem'
                    >
                        <img src={Buzz} alt='Buzz link logo' className='navIcon'></img>
                    </Link></li>
                <li><Link
                        to='/Portfolio'
                        className='navItem'
                    >
                        <img src={Account} alt='Account link logo' className='navIcon'></img>
                    </Link></li>
            </ul>
        </div>        
    );
    
}