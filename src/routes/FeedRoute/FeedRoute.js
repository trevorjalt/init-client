import React, { Component } from 'react';
import UserContext from '../../contexts/userContext'
import { buffTo64 } from '../../components/Utils/Utils'
import InitContentApiService from '../../services/init-content-api-service'
import config from '../../config'
import TokenService from '../../services/token-service'


class Feed extends Component {
    // static defaultProps = {
    //     setState: {
    //         setState: () => {},
    //     },
    // }

    static contextType = UserContext

    state = {
        photos: []
    }

    // getAvatar = () => { }

    getAvatar = () => {
      fetch(`${config.API_ENDPOINT}/avatar/download`, {
          method: "GET",
          headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`
          },
      })
          .then((res) => res.json())
        //   .then(res => console.log('response', res))
          .then(res => this.setState({ photos: res }))
          .catch((err) => {
              console.log("Went Wrong", err);
          })
    }

    renderPhotos() {
        if (this.state.photos) {
            return (
                this.state.photos.map((val) => (
                  <div className="slot" key={val.id}>
                    <h4>Name: {val.name}</h4>
                    <h4>Created:{new Date(val.date).toLocaleString()}</h4>
                    <img
                      alt=""
                      src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                    />
                    <hr />
                  </div>
                ))
            )
        } else {
            return ''
        }
    }

    render() {
        const { user } = this.context
        console.log(user) 
        return (
            <div>
                <h1>Le Feed</h1>
                <button onClick={this.getAvatar}>Click Me</button>
                {this.renderPhotos()}
            </div>
        );
    };
};

export default Feed;