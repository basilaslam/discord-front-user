import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,

} from 'react-icons/fa';
import React from 'react';
import { useServerStore } from '../../store/zustand';

const TopNavigation = () => {
  const { server } = useServerStore()

  return (
    <div className='top-navigation'>
      <HashtagIcon />
      <Title title={server?.servername}/>
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};


const Search = () => {

  return (
  <div className='search'>

    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='FA-search' />
  </div>
);
}
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = ({title}:{title:string|undefined}) => <h5 className='title-text'>{title || 'select server'}</h5>;

export default TopNavigation;