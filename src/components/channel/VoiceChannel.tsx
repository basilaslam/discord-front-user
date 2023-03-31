import React, { useEffect, useRef } from 'react';
import { io, Socket  } from 'socket.io-client';
import { useChannelStore } from '../../store/zustand';
import TopNavigation from '../TopNavigation/TopNavigation';

function VoiceChannel () {

  const { channel } = useChannelStore();

  const socket = useRef<Socket>();

  useEffect(() => {
    
    socket.current = io('http://localhost:5555');

    

    socket.current.emit('connect-room', { roomId: channel?._id });

    return () => {
      // cleanup: remove the event listener when the component unmounts
      socket.current?.off('recieve-message');
    };

    
  }, [channel]);


  return (
    <div className='main_container'>
    <div className='main_post_wrapper'>

     <h1>Hello</h1>
  </div>
  </div>
  );
}

export default VoiceChannel;
