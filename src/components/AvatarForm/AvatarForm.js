import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import InitContentContext from '../../contexts/initContentContext'
import InitContentApiService from '../../services/init-content-api-service'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
import '../../css/Form.css'


class AvatarForm extends Component {
    // static defaultProps = {
    //     location: {},
    //     history: {
    //         push: () => {},
    //     },
    // }

    static contextType = InitContentContext

    state = {
        error: null,
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        InitContentApiService.postAvatar(ev.target)
    }

    // handleUploadSuccess = () => {
    //     const { location, history } = this.props
    //     console.log(location)
    //     const destination = (location.state || {}).from || '/account'
    //     history.push(destination)
    // }

    render() {
        const { error } = this.state

        return (
            <form
                className='avatar-form'
                onSubmit={this.handleSubmit}
                encType='multipart/form-data'
            >
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                <PhotoUpload />
                <button type='submit'>
                    Upload Avatar
                </button>
            </form>
        )
    }
}

export default AvatarForm