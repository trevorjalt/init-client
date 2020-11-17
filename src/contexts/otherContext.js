import React, { Component } from 'react';

const OtherContext = React.createContext({
  something: [],
  setSomething: () => {},
})
export default OtherContext

export class OtherProvider extends Component {
  state = {
    something: [],
  };

  setSomething = something => {
    this.setState({ something });
  };
  
  render() {
    const value = {
      something: this.state.something,
      setSomething: this.setSomething,
    }
    return (
      <OtherContext.Provider value={value}>
        {this.props.children}
      </OtherContext.Provider>
    )
  };
};