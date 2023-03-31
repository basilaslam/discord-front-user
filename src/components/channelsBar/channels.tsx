import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsHash } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import {useChannelStore, useChannelsStore, usePopupStore, useServerStore} from '../../store/zustand';
import { Channel } from "../../store/types";

// is in props
// make a useEffect and get all data and set props as dependency
const ChannelBar = () => {
    const {channels, setChannels} = useChannelsStore()
    const { server } = useServerStore()


    useEffect(() => {

        server&&Object.keys(server).length&&(async () =>{
            const response = await axios.get(`/channel/getAll/${server._id}`)
            setChannels(response.data)
            
        })()
      }, [server])



    return (
        <div className="channel-bar shadow-lg">
            <ChannelBlock />
            <div className="channel-container">
            { channels&&channels.map((selection: { name: string; _id: string }, index) => <TopicSelection key={index} data={selection} selection={selection.name} />)}

            </div>
        </div>
    );
};

const ChannelBlock = () => {
    const { setIsOpen, isOpen, setMessage } = usePopupStore()

   
    const handleCreateChannel = () =>{
        setIsOpen(!isOpen)
        setMessage('createChannel')
    }
    return (
        <div className="channel-block">
            <h5 className="channel-block-text">Channels</h5>
            <div className="create_channel_button" onClick={handleCreateChannel}>
                Add <FaPlus/>
            </div>
        </div>
    );
};

const TopicSelection = ({ selection, data }:{ selection:string, key:any, data:any }) =>{
    const { channel, setChannel } = useChannelStore();
return (
    <div className='dropdown-selection' onClick={() => setChannel(data)}>
        <BsHash size='24' className='text-gray-400' />
        <h5 className={`dropdown-selection-text ${channel?._id == data._id ? 'text-white' : 'text-gray-400'}`} >{selection}</h5>
    </div>
);
}

export default ChannelBar;