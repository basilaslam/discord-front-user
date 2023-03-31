import React, { useRef, useState } from 'react'
import { useChannelStore, useChannelsStore, usePopupStore, useServerStore } from '../../store/zustand';
import axios from 'axios';
function CreateChannelForm() {
  
  const [channelType, setChannelType] = useState<string | undefined>();
  const [channelName, setChannelName] = useState<string>("");
  const { server,setServer } = useServerStore()
  const {channels, setChannels} = useChannelsStore()
  const warning = useRef<HTMLInputElement>(null);
  const {isOpen, setIsOpen} =   usePopupStore()


    const handleSubmit = async (e:any) => {
      e.preventDefault()
      console.log(channelName, channelType,server?._id );
      const channelDetailes = {
      parentServer: server?._id,
      type: channelType,
      name: channelName,
      chatType:'channel'
  }
  const createChannelResponse = await axios.post('/channel/create', channelDetailes);
  const getChannelResponse = server && await axios.get(`/channel/getAll/${server._id}`)
  const channel = createChannelResponse.data.server
  setChannels(getChannelResponse?.data)
  setIsOpen(!isOpen)
};
  


  return (
   <div className="create_channel_form_div">
    <form className="create_channel_form" onSubmit={(event)=>handleSubmit(event)}>
    <div className="mb_4">
      <label className="create_channel_form_label">Channel Name:</label>
      <input value={channelName} className="create_channel_form_channelName" type="text" name="channel_name" required onChange={(event) => setChannelName(event.target.value)}/>
    </div>
    <div className="mb-4">
      <label className="create_channel_form_label">Type:</label>
      <div className="flex_item_center">
        <input className="mr-2" type="radio" name="type" id="voice" value="voice"  onChange={(event) => setChannelType(event.target.value)}/>
        <label htmlFor="voice">Voice</label>
      </div>
      <div className="flex_item_center">
        <input className="mr-2" type="radio" name="type" id="text" value="text"  onChange={(event) => setChannelType(event.target.value)}/>
        <label htmlFor="text">Text</label>
      </div>
    </div>
    <div className="text-center">
      <button className="create_channel_form_submit_btn" type="submit">Submit</button>
    </div>
  </form>
  </div>

  )
}

export default CreateChannelForm