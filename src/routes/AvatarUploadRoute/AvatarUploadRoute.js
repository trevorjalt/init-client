import React, { Component } from 'react';
import AvatarForm from '../../components/AvatarForm/AvatarForm'


class AvatarUploadRoute extends Component {
    render() {
        return (
            <div>
                <h2>Avatar</h2>
                <AvatarForm />
            </div>
        );
    };
};

export default AvatarUploadRoute;