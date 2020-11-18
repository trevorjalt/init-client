import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginRoute extends Component {
  static defaultProps = {
      location: {},
      history: {
          push: () => { },
      },
  }

  handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/feed'
      history.push(destination)
  }

  render() {
      return (
          <section 
              className='login-route'
              aria-live='polite'
              aria-relevant='all'
          >
              <h2 className='login-title'>logIn</h2>
              <LoginForm
                  onLoginSuccess={this.handleLoginSuccess}
              />
          </section>
      )
  }
}

export default LoginRoute