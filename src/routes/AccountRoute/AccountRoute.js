import React, { Component } from 'react';
import AccountInformation from '../../components/AccountInformation/AccountInformation'
import './AccountRoute.css';

class AccountRoute extends Component {
    render() {
        return (
            <div>
                <h2>Account</h2>
                <AccountInformation />
            </div>
        )
    }
};

export default AccountRoute;