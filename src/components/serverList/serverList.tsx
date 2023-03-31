import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {Server} from '../../../Types/server'
import axios from 'axios'
import { func } from 'prop-types'
import { useServerssStore } from '../../store/zustand'
export default function serverList() {
const [servers, setServers] = useState<Server[]>()


	useEffect(()=>{
		const getServers = async () => {
			const data = await axios.get('/server/getAllServers') 
			setServers(data.data)
		}
		getServers()
	},[])
  return (
	
	<div className='serverlist_wrapper'>
		{servers && servers.map(server => <Card name={server.servername} key={server._id} id={server._id} image={server.logo} />)}
	</div>
  )
}


const Card = ({name,id, image}:{name:string,id:string, image: string}) =>{

	const { updateServers } = useServerssStore()

const joinServer = async () =>{
	console.log(id)
	const data = await axios.get(`/server/join-server/${id}`) 

	return true

}
	
	const openPopUp = () => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
			  confirmButton: 'btn btn-success',
			  cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		  })
		  
		  swalWithBootstrapButtons.fire({
			title: 'Add the server?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Add!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		  }).then(async (result) => {
			if (result.isConfirmed) {
				await joinServer()
				updateServers()
			  swalWithBootstrapButtons.fire(
				'Added!',
				'new server has been added.',
				'success'
			  )
			} else if (
			  /* Read more about handling dismissals below */
			  result.dismiss === Swal.DismissReason.cancel
			) {
			  swalWithBootstrapButtons.fire(
				'Adding server Cancelled',
			  )
			}
		  })
	}

	return(
		<div className="server-card" >
        <img className="server-card-img" src={image} alt="Bonnie image"/>
        <h5 className="server-card-h5">{name}</h5>
        <span className="">Visual Designer</span>
        <div className="server-card-details">
            <a href="#" className="server-card-details-add" onClick={openPopUp}>Add Server</a>
        </div>
</div>
	)
}



