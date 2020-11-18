import React, { useContext } from 'react';
import UserContext from '../../contexts/userContext';

function ProfileTop() {
  const userContext = useContext(UserContext)
  console.log(userContext.user)
  let { user } = userContext
  console.log(user.username)

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
          <p className='p-item-top'>{user.username}</p>
          <p className='p-item-mid'>stack: front/back/full</p>
          <p className='p-item-bot'>portfolio: description</p>
        </div>
      </section>
    );
};

export default ProfileTop;