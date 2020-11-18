import React, { Component } from 'react';
import UserContext from '../../contexts/userContext';
import './AccountRoute.css';

class Account extends Component {
    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    static contextType = UserContext

    render() {
        const { user } = this.context
            console.log(user)
        return (
            <div className='account-wrapper'>
                <h2>Account</h2>
                <p>info</p>
                    <form className='account-form'>
                        <fieldset>
                            <legend><h3>fullName</h3></legend>
                            <span>{ user.fullname }</span>
                        </fieldset>
                        <fieldset>
                            <legend><h3>userName</h3></legend>
                            <span>{ user.username }</span>
                        </fieldset>
                        <fieldset>
                            <legend><h3>eMail</h3></legend>
                            <span>{ user.email }</span>
                        </fieldset>
                        <fieldset>
                            <legend><h3>about</h3></legend>
                            <span>{ user.about_user }</span>
                        </fieldset>
                        <fieldset>
                            <legend><h3>stack</h3></legend>
                            <span>{ user.user_stack }</span>
                        </fieldset>
                    </form>
                </div>
        );
    }
};

export default Account;