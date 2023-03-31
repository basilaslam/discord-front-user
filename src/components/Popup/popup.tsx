import React from 'react';
import { usePopupStore } from '../../store/zustand';
import CreateServerForm from '../createServer/createServerForm';
import CreateChannelForm from '../createChannelForm/createChannelForm';

const Popup = () => {
	const {isOpen, message, setIsOpen, setMessage} = usePopupStore()
	const toggleCreateServerForm = () => {
		setIsOpen(!isOpen)
		setMessage('')
		console.log('testjhg');
		
	  };
	  
	  let FormToRender;

	  switch (message) {
		case 'createServer':
			FormToRender = <CreateServerForm />
			break;
		case 'createChannel':
			FormToRender = < CreateChannelForm />
	  }


	return <>
	      <div onClick={toggleCreateServerForm} className="bg_gray"></div>

	          {FormToRender}

	</>
};

export default Popup;