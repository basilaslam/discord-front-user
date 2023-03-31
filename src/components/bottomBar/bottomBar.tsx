import React, { useRef, useState } from 'react';
import {useChannelStore, useUserStore} from '../../store/zustand';
import axios from 'axios';
import { BsPlusCircleFill } from 'react-icons/bs';
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
interface Props {
	updateMessages: any;
  }
  
  const BottomBar: React.FC<Props> = ({ updateMessages }) => {
	const [change, setChange] = useState("");
  
	const inputRef = useRef<HTMLInputElement>(null);
	const { user } = useUserStore()
	const {channel} = useChannelStore()
  
	const handleChange = () => {
	  if (inputRef.current) {
		setChange(inputRef.current.value);
	  }
	};
  
	const sendMessage = async () => {
  
	  let chatId;
		console.log(user);
		
	  if(channel?.chatType == 'channel'){
		chatId = channel._id
	  }else{
		if(user) chatId = user?._id
	  }
	  const messageToSave = {
		chatId : chatId,
		senderId: user?._id,
		text: change
	  }
	  console.log(messageToSave);
	  
	  
	  const saveMessageResponse = await axios.post('chat/addMessage',messageToSave)
   
  
	  if(saveMessageResponse.status == 200 && change && user){
  
		  const message: Message = {
			name: user.username,
			text: change,
			senderId: {
			  username: user.username,
			  email: user.email
			},
			createdAt: new Date().toISOString()
		  }
		  
	
		
		updateMessages(message);
	  }
	  setChange("");
	};
  
	return (
	  <div className="bottombar">
		<PlusIcon />
		<input
		  ref={inputRef}
		  type="text"
		  placeholder="Enter message..."
		  className="bottombar_input"
		  value={change}
		  onChange={handleChange}
		  onKeyDown={(e) => {
			if (e.key === "Enter") {
			  sendMessage();
			}
		  }}
		/>
	  </div>
	);
  };


export default BottomBar
  const PlusIcon = () => (
    <BsPlusCircleFill
      size='22'
      className='plus_icon'
    />
  );