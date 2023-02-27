import React from 'react';

// import React from 'react'
// import Channels from '../channelsBar/channels'
// import MessageSection from '../messageSection/messageSection'
// import UsersBar from '../usersBar/UsersBar'

// function Main() {
//   return (
//     <div className='flex gap-20 justify-between m-0'>
//    <Channels />
//    <MessageSection/>
//    <UsersBar/>
//    </div>
//   )
// }

// export default Main

import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className='main_container'>
      {/* <TopNavigation /> */}
      <div className='main_post_wrapper'>
        <Post
          name='Ada'
          timestamp='one week ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post name='Leon' timestamp='one week ago' text={'Lorem ipsum dolor. '} />
        <Post name='Jill' timestamp='5 days ago' text={'Lorem.'} />
        <Post
          name='Ellie'
          timestamp='4 days ago'
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. '}
        />
        <Post
          name='Chris'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post
          name='Claire'
          timestamp='2 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='Albert'
          timestamp='22 hours ago'
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ '}
        />
        <Post
          name='Rebecca'
          timestamp='3 hours ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
        />
        <Post
          name='H.U.N.K'
          timestamp='Just now'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottombar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottombar_input'/>
  </div>
);

const Post = ({ name, timestamp, text }: { name: string, timestamp: string, text: string }) => {
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

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='plus_icon'
  />
);

export default ContentContainer;
