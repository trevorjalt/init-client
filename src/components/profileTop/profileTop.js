import React, { Component } from 'react';

class ProfileTop extends Component {
  render() {
    return (
    <section> 
      <div className='hex-wrapper'>
        <div className='hexagon'></div>
        <div className='p-wrapper'>
          <p className='p-filling'>post counter</p>
          <p className='p-filling'>follower counter</p>
          <p className='p-filling'>following counter</p>
        </div>
      </div>
      <div className='profile-wrapper'>
        <p className='p-item-top'>userName</p>
        <p className='p-item-mid'>stack: front/back/full</p>
        <p className='p-item-bot'>portfolio: description</p>
      </div>
    </section>
    );
  };
};

export default ProfileTop;