import React, { useEffect, useState } from 'react';
import User from '../User/user';
import axios from 'axios';
import user from '../User/user';
import { useServerStore } from '../../store/zustand';

interface User {
  image: string;
  username: string;
  _id: string;
}
function UsersBar () {

  const  [users, setUsers] = useState<User[]>([])
  const {server} = useServerStore()
  useEffect(()=>{
    const getUsers = async () =>{
      const data = await axios.get(`/server/listMembers/${server?._id}`)
      
      setUsers(data.data.members)
      }
  
      getUsers()
  },[server])
  return (
   <div className='users_wrapper'>
   {users.length&& users.map((user) => <User image={user.image} name={user.username} key={user._id} id={user._id} />)}
   </div>
  ); 
}

export default UsersBar;
