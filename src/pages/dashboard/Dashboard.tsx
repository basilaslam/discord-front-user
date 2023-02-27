import React from 'react';
import Channels from '../../components/channelsBar/channels';
import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/sidebar';

function Dashboard () {
  return (
<div className="d-flex">
<Sidebar/>
<Channels/>
<Main/>
</div>
  );
}

export default Dashboard;
