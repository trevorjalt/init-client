import React, { Component } from 'react';
import UserContext from '../../contexts/userContext'


class Feed extends Component {
    static contextType = UserContext

    render() {
        const { user } = this.context
        console.log(user) 
        return (
            <div>
                <h1>Le Feed</h1>
            </div>
        );
    };
};

export default Feed;