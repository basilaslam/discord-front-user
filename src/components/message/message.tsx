import React from 'react';




const Message = ({ name, timestamp, text }: { name: string, timestamp: string, text: string }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className="post">
      <div className='post_left'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div> 

      <div className='post_right'>
        <p className='post_right_p'>
          {name}
          <small className='post_right_small'>{timestamp}</small>
        </p>
        <p className='post_right_text'>{text}</p>
      </div>
    </div>
  );
};
export default Message;