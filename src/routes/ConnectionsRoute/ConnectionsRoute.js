import React, { Component } from 'react';
import UserContext from '../../contexts/userContext'
import FollowList from '../../components/FollowList/FollowList'


class Connections extends Component {
    static contextType = UserContext

    render() {
        const { user } = this.context
        console.log(user)
        return (
            <FollowList />
        );
    };
};

export default Connections;