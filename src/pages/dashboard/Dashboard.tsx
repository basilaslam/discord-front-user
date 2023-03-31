import React from 'react';
import Channels from '../../components/channelsBar/channels';
import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/sidebar';
import {usePopupStore, useServerListStore} from '../../store/zustand';
import UsersBar from '../../components/usersBar/UsersBar';
import Popup from '../../components/Popup/popup';
import ServerList from '../../components/serverList/serverList';
import TopNavigation from '../../components/TopNavigation/TopNavigation';
import ServerPage from '../../components/serverPage/serverPage';
// create a state and setState should be null and managed by sidebar
// share state as props
// share state to main component as props
function Dashboard () {

  const { isOpen} = usePopupStore()
  const {isListOpen, setListOpen} = useServerListStore()

  return (
<div className="d-flex h-100vh">
{isOpen&&<Popup />}
<Sidebar />

{isListOpen? <ServerList/> :
        <ServerPage/>
}
</div>
  );
}

export default Dashboard;
