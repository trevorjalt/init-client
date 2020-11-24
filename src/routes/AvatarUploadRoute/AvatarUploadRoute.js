import React, { Component } from 'react';
import AvatarForm from '../../components/AvatarForm/AvatarForm'


class AvatarUploadRoute extends Component {
    render() {
        return (
            <section>
                <h2>Avatar</h2>
                <AvatarForm
                    history={this.props.history} 
                />
            </section>
        );
    };
};

export default AvatarUploadRoute;