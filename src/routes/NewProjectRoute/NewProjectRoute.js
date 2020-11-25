import React, { Component } from 'react';
import PostForm from '../../components/PostForm/PostForm'

class NewProject extends Component {
  render() {
    return (
      <div>
        <h1>New Project</h1>
        <PostForm />
      </div>
    );
  };
};

export default NewProject;