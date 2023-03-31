import React from 'react'
import Channels from '../channelsBar/channels'
import Main from '../main/Main'
import UsersBar from '../usersBar/UsersBar'
import TopNavigation from '../../components/TopNavigation/TopNavigation';

function serverPage() {
  return (
	<div className='server-container'>
    <TopNavigation/>
		<Channels />
    <Main />
    <UsersBar />
	</div>
  )
}

export default serverPage