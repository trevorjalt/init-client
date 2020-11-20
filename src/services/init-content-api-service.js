import config from '../config'
import TokenService from './token-service'

const InitContentApiService = {
    // getAvatar() {
    //     fetch(`${config.API_ENDPOINT}/avatar/download`, {
    //         method: "GET",
    //         headers: {
    //             'authorization': `bearer ${TokenService.getAuthToken()}`
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then(res => console.log(res))
    // .then(res =>
    //   (!res.ok)
    //       ? res.json().then(event => Promise.reject(event))
    //       : res.json()
    // )
    // },

    postAvatar(file) {
        fetch(`${config.API_ENDPOINT}/avatar/upload`, {
            method: "POST",
            body: new FormData(file),
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                console.log(res)
                // this.props.history.push('/account')
            })
            .catch(err => {
                console.log('Upload failed', err)
            })
    }
}

export default InitContentApiService