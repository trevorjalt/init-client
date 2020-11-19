import React, { Component } from 'react'
// import AuthApiService from '../services/auth-api-service'
// import TokenService from '../services/token-service'
// import IdleService from '../services/idle-service'

const InitContentContext = React.createContext({
    data: {},
    setData: () => {},
})

export default InitContentContext

export class InitContentProvider extends Component {
    state = {
      data: {}
    }

    setData = data => {
        console.log('setting data', data)
        this.setState({ data })
    }

    render() {
        const value = {
            data: this.state.data,
            setData: this.setData,
        }
        return (
            <InitContentContext.Provider value={value}>
                {this.props.children}
            </InitContentContext.Provider>
        )
    }
}