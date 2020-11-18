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

    // componentDidMount() {}
  

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
                          <label htmlFor="fname"></label>
                          <span>Adyceum</span>
                        </fieldset>
                        <fieldset>
                          <legend><h3>userName</h3></legend>
                          <label htmlFor="fname"></label>
                          <span>Adyceum</span>
                        </fieldset>
                        <fieldset>
                          <legend><h3>eMail</h3></legend>
                          <label htmlFor="fname"></label>
                          <span>AMC@gmail.com</span>
                        </fieldset>
                        <fieldset>
                          <legend><h3>about</h3></legend>
                          <label htmlFor="fname"></label>
                          <span>Adyceum</span>
                        </fieldset>
                        <fieldset>
                          <legend><h3>stack</h3></legend>
                          <label htmlFor="fname"></label>
                          <span>full-stack</span>
                        </fieldset>
                    </form>
            </div>
        );
    }
};

export default Account;