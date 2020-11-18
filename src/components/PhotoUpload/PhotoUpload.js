import React, { Component } from 'react'
// import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/userContext'
import '../../css/Form.css'

class PhotoUpload extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    static contextType = UserContext

    state = { 
        error: null,
        file: null,
        data: null,
    }

    inputRef = React.createRef()

    checkExtension = (fileName) => {
        const pattern = '(' + ['.jpg', '.gif', '.png', '.jpeg'].join('|').replace(/\./g, '\\.') + ')$';
        return new RegExp(pattern, 'i').test(fileName);
    }

    changeFile = (ev) => {
        const { setData } = this.context

        if(this.checkExtension(ev.target.files[0].name)) {
            this.readFile(ev.target.files[0]).then(file=>{
                if(file.file.size <= 1048576) {
                this.setState(oldVals=>({
                    ...oldVals,
                    data: file.dataURL,
                    file: file.file,
                    error: null
                }))
                console.log('file', file.file.slice(0, 1))
                } else {
                this.setState({ error: 'File Size Larger Than 1MB' })
                }
                setData(this.state.file)
            }).catch(err=>{
                console.log('ERROR:-', err)
                this.setState({ error: err })
            })
        } else {
          this.setState({error: 'File Type Not Supported'})
        }
    }

    renderPreview() {
        return (
            <div>
                <img 
                    src={this.state.data}  
                    alt='profile-preview' 
                    className='preview-photo' 
                />
            </div>
        )
    }

    readFile = (file) => {
        return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            // read the image received via FileReader and later save it to state
            reader.onload = function(ev) {
                // add the file name to the data URL
                let dataURL = ev.target.result;
                dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
                resolve({ file, dataURL });
            };
            reader.readAsDataURL(file);
        });
    }

    // componentDidMount() {
    //     this.inputRef.current.focus()
    // }

    render() {
        const { error } = this.state
        return (
            <div className='form-wrapper'>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                {/* <div> */}
                <label htmlFor='account-photo-upload'>
                    photo
                </label>
                <input
                    ref={this.inputRef}
                    accept='image/*'
                    type='file'
                    id='account-photo-upload'
                    onChange={this.changeFile}
                    name='profile_photo'
                    required
                    aria-required='true'
                    autoComplete='off'
                />
                {/* </div> */}
                {this.state.data
                    ? this.renderPreview()
                    : ''
                }

            </div>
        )
    }
}

export default PhotoUpload