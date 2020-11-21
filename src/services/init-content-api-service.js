import config from '../config'
import TokenService from './token-service'

const InitContentApiService = {
    getAvatar() {
        return fetch(`${config.API_ENDPOINT}/avatar/download`, {
            method: "GET",
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    postAvatar(file) {
        return fetch(`${config.API_ENDPOINT}/avatar/upload`, {
            method: "POST",
            body: new FormData(file),
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res
            )
    },

    updateAvatar(file, update) {
        return fetch (`${config.API_ENDPOINT}/avatar/upload/${update}`, {
            method: 'PATCH',
            body: new FormData(file), 
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }, 
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : null
            )
    },
}

export default InitContentApiService