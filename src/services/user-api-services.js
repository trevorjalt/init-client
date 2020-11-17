import config from '../config';

//VERIFY ENDPOINTS WITH TEAM
//NO BEARER TOKENS YET

export const UserApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        //'authorization': `bearer ${config.API_KEY}`
      },
      body: JSON.stringify(user)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUser() {
    return fetch(`${config.API_ENDPOINT}/user`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
};