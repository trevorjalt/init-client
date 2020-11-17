import React, { Component } from 'react';

const UserContext = React.createContext({
  user: {},
  setUser: () => {},
})

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: {}
  };

  setUser = user => {
    this.setState({ user });
  };
  
  render() {
    const value = {
      user: this.state.user,
      setUser: this.setUser,
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  };
};