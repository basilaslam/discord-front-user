import React from 'react';

function user ({image, id, name}:{image:string, id:string, name:string}) {
  return (
    <div className='user'>
      <div className="left">
        <img className='userProfileImage' src={image} alt="" />
      </div>
      <div className="right">
        <h3 className='userProfileName'>{name}</h3>
      </div>
    </div>
  );
}

export default user;
