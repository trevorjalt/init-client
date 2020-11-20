import React, { Component } from 'react';
import Gallery from '../../components/gallery/gallery';
import ProfileTop from '../../components/profileTop/profileTop';
import '../../css/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <section>
        <ProfileTop />
        <Gallery />
        <footer>
          <div className='login_buttons'>
            <button>Login</button>
            <button className='signup'>Signup</button>
          </div>
          <span><h2>Placeholder</h2></span>
        </footer>
      </section>
    );
  };
};

export default Portfolio;