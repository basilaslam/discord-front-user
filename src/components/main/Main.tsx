import React from 'react'
import TextChannel from '../channel/TextChannels'
import { useChannelStore } from '../../store/zustand';
import VoiceChannel from '../channel/VoiceChannel';

function Main() {
  const { channel } = useChannelStore();
  return (
 
    channel?.type == 'voice'?  <VoiceChannel/>: <TextChannel/>
   
  )
}

export default Main










