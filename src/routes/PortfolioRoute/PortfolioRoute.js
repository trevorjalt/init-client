import React, { Component } from 'react';
<<<<<<< HEAD
import Gallery from '../../components/gallery/gallery';
import ProfileTop from '../../components/profileTop/profileTop';
=======
import Gallery from '../../components/Gallery/Gallery.YouTuber';
import ProfileTop from '../../components/ProfileTop/ProfileTop';
>>>>>>> 06a83c823f78cc243bca9fcb47dd7c29659b4832
import '../../css/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <section>
        <ProfileTop />
        <Gallery />
      </section>
    );
  };
};

export default Portfolio;