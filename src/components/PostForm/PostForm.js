import React, { Component } from 'react'
import InitContentContext from '../../contexts/initContentContext'
import InitContentApiService from '../../services/init-content-api-service'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
// import '../../css/AvatarForm.css'


class PostForm extends Component {
    static contextType = InitContentContext

    state = {
        error: null,
        // currentAvatar: {},
    }

    // this component did mount sets the state of currentAvatar, allowing us 
    // to run a check for avatar uploads: if one exists, the client makes a 
    // patch request for the existing avatar.  If it doesn't, the client makes 
    // a post request. 
    // componentDidMount() {
    //     // this.context.clearError()
    //     InitContentApiService.getAvatar()
    //         .then(res => this.setState({ currentAvatar: res }))
    //         // .catch(this.setState)
    // }

    handleSubmit = (ev) => {
        ev.preventDefault()
        // const currentPost= this.state.currentAvatar
        // const { setData } = this.context


        InitContentApiService.postInitProject(ev.target)
            // .then(setCurrentAvatar())
            .then(() => this.props.history.push('/portfolio'))
            // .then(setData())
            .catch(error => {
                this.setState({ error })
            })
    }
    

    render() {
        const { error } = this.state
        // const { data } = this.context
        // const currentAvatar = this.state.currentAvatar
        // console.log('avatar', currentAvatar)

        return (
            <form
                className='project-form'
                onSubmit={this.handleSubmit}
                encType='multipart/form-data'
            >
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error.message}</p>}
                </div>
                <PhotoUpload />
                <div className='project-form-input'>
                    <label 
                        htmlFor='init-project-title-input'
                        aria-label='init-project-title-input'
                        className='project-form-label'
                    />
                    <input
                        id='init-project-title-input'
                        name='init-project-title-input'
                        type='text'
                        className='project-form-input'
                        placeholder='Enter a title for your project'
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                    <label 
                        htmlFor='init-project-description-input'
                        aria-label='init-project-description-input'
                        className='project-form-label'
                    />
                    <input
                        id='init-project-description-input'
                        name='init-project-description-input'
                        type='text'
                        className='project-form-input'
                        placeholder='Enter a description for your project'
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                    <input
                        id='init-project-live-link-input'
                        name='init-project-live-link-input'
                        type='text'
                        className='project-form-input'
                        placeholder='Enter a url for your live project'
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                    <input
                        id='init-project-live-link-input'
                        name='init-project-live-link-input'
                        type='text'
                        className='project-form-input'
                        placeholder='Enter a url for your live project'
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                    <input
                        id='init-project-tech-stack-input'
                        name='init-project-tech-stack-link-input'
                        type='text'
                        className='project-form-input'
                        placeholder='Enter your project tech stack'
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                </div>
                <button 
                    type='submit'
                    className='project-form-submit-button'
                    // disabled={!data}
                >
                    Upload
                </button>
            </form>
        )
    }
}

export default PostForm