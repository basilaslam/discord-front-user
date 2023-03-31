import React, { ReactNode, useEffect, useState } from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import axios from 'axios';
import { usePopupStore, useServerListStore, useServerStore, useServerssStore } from '../../store/zustand';
import { Server } from '../../store/types';
const SideBar = () => {
  const {servers, setServers} = useServerssStore()
  const {setServer} = useServerStore()
  const {isListOpen, setListOpen} = useServerListStore()

  useEffect(() => {
    const getData = async () =>{
    const data = await axios.get('/server/listServers')
    console.log(data)
    setServers(data.data)
    }
    getData()
  }, [])
  




  return (
    <div className="sidebar_container">
      <SideBarIcon icon={<FaFire size="28" />}/>
      <Divider />
{servers&&servers.map((server)=>{

  return (<SideBarIcon icon={<Icon src={server.logo} />} key={server._id}  onClick={()=> setServer(server)}/>)
})}
      <SideBarIcon icon={<BsPlus size="32" />}  create={true}/>
      <SideBarIcon icon={<BsFillLightningFill size="20" />}  onClick={() => setListOpen(!isListOpen)}/>
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};
export default SideBar;

const Icon = (_props: { src: string | undefined; }) =>{


  return (
    <img className='sidebar_icon' src={_props.src} alt="" />
  )
}
const SideBarIcon = ({ icon, text = 'tooltip 💡', onClick, create }: { icon: ReactNode,create?: boolean, text?: string, onClick?:()=> void}) => {
  const {isOpen, setIsOpen, setMessage} = usePopupStore()


  const handleClick = () => {
      create && setIsOpen(!isOpen)
      create && setMessage('createServer') 
      onClick && onClick()
  };

  return (
    <div className="sidebar_icon" onClick={handleClick}>
      {icon}
      <span className="sidebar_icon_span">
        {text}
      </span>
    </div>
  );
};



const Divider = () => <hr className="divider" />;