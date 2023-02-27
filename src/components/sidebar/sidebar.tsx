import React, { ReactNode, useState } from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import CreateServerForm from '../createServer/createServerForm';
const SideBar = () => {
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const toggleCreateAccountForm = () => {1
    console.log(!showCreateAccountForm)
    setShowCreateAccountForm(!showCreateAccountForm);
  };

  return (
    <div className="sidebar_container">
      <SideBarIcon icon={<FaFire size="28" />} link='/channel/create'/>
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} link='/channel/create' onClick={toggleCreateAccountForm} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} link='/channel/create' />
      <SideBarIcon icon={<FaPoo size="20" />} link='/channel/create'/>
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} link='/channel/create'/>
      {showCreateAccountForm && <CreateServerForm onClick = {toggleCreateAccountForm}/>}
    </div>
  );
};
export default SideBar;


const SideBarIcon = ({ icon, text = 'tooltip 💡', link, onClick }: { icon: ReactNode, text?: string, link:string, onClick?:()=> void}) => {
  

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
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