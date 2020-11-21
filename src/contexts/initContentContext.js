import React, { Component } from 'react'
import InitContentApiService from '../services/init-content-api-service'
// import AuthApiService from '../services/auth-api-service'
// import TokenService from '../services/token-service'
// import IdleService from '../services/idle-service'

const InitContentContext = React.createContext({
    data: {},
    currentAvatar: {},
    setCurrentAvatar: () => {},
    setData: () => {},
})

export default InitContentContext

export class InitContentProvider extends Component {
    state = {
      data: null,
      currentAvatar: {}
    }

    componentDidMount() {
        // this.context.clearError()
        InitContentApiService.getAvatar()
            .then(res => this.setState({ currentAvatar: res }))
            // .catch(this.context.setError)
    }

    setCurrentAvatar = currentAvatar => {
        this.setState({ currentAvatar })
    }

    setData = () => {
        console.log('setting data')
        this.setState({ data: !this.state.data })
    }

    render() {
        const value = {
            currentAvatar: this.state.currentAvatar,
            data: this.state.data,
            setCurrentAvatar: this.setCurrentAvatar,
            setData: this.setData,
        }
        return (
            <InitContentContext.Provider value={value}>
                {this.props.children}
            </InitContentContext.Provider>
        )
    }
}