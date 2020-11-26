import React, { Component } from 'react'
// import InitContentApiService from '../services/init-content-api-service'
// import AuthApiService from '../services/auth-api-service'
// import TokenService from '../services/token-service'
// import IdleService from '../services/idle-service'

const InitContentContext = React.createContext({
    data: null,
    projectData: null,
    // currentAvatar: {},
    // setCurrentAvatar: () => {},
<<<<<<< HEAD
    setData: () => { },
=======
    setData: () => {},
    setProjectData: () => {},
>>>>>>> 02793aeb6e0ef2b616b08612488b92cb13139c31
})

export default InitContentContext

export class InitContentProvider extends Component {
    state = {
<<<<<<< HEAD
        data: null,
        //   currentAvatar: {}
    }

=======
      data: null,
      projectData: null,
    //   currentAvatar: {}
    }  
    
>>>>>>> 02793aeb6e0ef2b616b08612488b92cb13139c31
    // componentDidMount() {
    //     // this.context.clearError()
    //     InitContentApiService.getAvatar()
    //         .then(res => this.setState({ currentAvatar: res }))
    //         // .catch(this.context.setError)
    // }

    // setCurrentAvatar = currentAvatar => {
    //     this.setState({ currentAvatar })
    // }

    setData = () => {
        this.setState({ data: !this.state.data })
    }

    setProjectData = () => {
        console.log('setting project data')
        this.setState({ projectData: !this.state.projectData })
    }

    render() {
        const value = {
            // currentAvatar: this.state.currentAvatar,
            data: this.state.data,
            projectData: this.state.projectData,
            // setCurrentAvatar: this.setCurrentAvatar,
            setData: this.setData,
            setProjectData: this.setProjectData,
        }
        return (
            <InitContentContext.Provider value={value}>
                {this.props.children}
            </InitContentContext.Provider>
        )
    }
}