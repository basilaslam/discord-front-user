import React, { useEffect, useRef, useState } from 'react';
import { io, Socket  } from 'socket.io-client';
import {useChannelStore} from '../../store/zustand';
import axios from 'axios';
import Message from '../message/message';
import BottomBar from '../bottomBar/bottomBar';
import TopNavigation from '../TopNavigation/TopNavigation';

type User= {
  username: string;
  email: string;
}
  type Message = {
    _id?: string;
    senderId: User;
    createdAt: string;
    name: string;
    text: string;
  }
function TextChannel () {

  const [messages, setMessages] = useState<Message[]>([]);
    const { channel } = useChannelStore();
  
    const socket = useRef<Socket>();
    const dummy = useRef<HTMLDivElement>(null)

    useEffect(() => {
  
      const getPreviousMessages = async () => {
        const res = await axios.get(`chat/getMessages/${channel?._id}`);
        console.log(res.data.data);
        
        setMessages(res.data.data);
      };
  
      // getChannelDetails();
      getPreviousMessages();
  
      socket.current = io('http://localhost:5555');
  
      socket.current.on('recieve-message', (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
  
      socket.current.emit('connect-room', { roomId: channel?._id });

      if(dummy.current) {
        dummy.current.scrollIntoView({ behavior: 'smooth' })

      }      return () => {
        // cleanup: remove the event listener when the component unmounts
        socket.current?.off('recieve-message');
      };

      
    }, [channel]);


    useEffect(()=>{
      if(dummy.current) {
        dummy.current.scrollIntoView({ behavior: 'smooth' })
      } 
    },[messages])
  
    const updateMessage = (newMessage: Message) => {
      if (newMessage) socket.current?.emit('send-message', { roomId: channel?._id, message: newMessage });
    };
    console.log(channel);
    
    return (
      <div className='main_container'>
        {/* <TopNavigation /> */}
        <div className='main_post_wrapper'>

          {messages&&messages.map((message: Message, index: number) => (
            <Message key={index} name={message.senderId.username} timestamp={message.createdAt} text={message.text} />
          ))}
          
            <div ref={dummy}></div>
          <div  />
   
        </div>
        <BottomBar updateMessages={updateMessage} />
      </div>
    );
  }



  

export default TextChannel;
