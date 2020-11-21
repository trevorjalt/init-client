import React, { Component } from 'react';
import AccountInformation from '../../components/AccountInformation/AccountInformation'
import UserContext from '../../contexts/userContext'


class AccountRoute extends Component {
    render() {
        return (
            <section className='account-route'>
                <h2>Account</h2>
                <UserContext.Consumer>
                    {user => (
                        <AccountInformation user={user}/>
                    )}
                </UserContext.Consumer>
            </section>
        )
    }
};

export default AccountRoute;