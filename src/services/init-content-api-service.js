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
    },

    getPost(post_id) {
        //not made in the back end yet
        return fetch(`${config.API_ENDPOINT}/post/${post_id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getPostComments(post_id) {
        return fetch(`${config.API_ENDPOINT}/comment/${post_id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postComment(post_id, comment) {
        return fetch(`${config.API_ENDPOINT}/comment/${post_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({ post_id, comment })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

    }














}




export default InitContentApiService