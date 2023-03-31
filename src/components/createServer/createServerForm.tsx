/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef} from "react";
import UploadImage from "../../assets/iconComponents/uploadImage";
import axios from "axios";
import storage from '../../firebase/firebaseConfig'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import 'firebase/storage';


import { nanoid } from 'nanoid';
import { usePopupStore, useServerssStore } from "../../store/zustand";

const CreateServerForm = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [serverName, setServerName] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [progressUpload, setProgressUpload] = useState(0)
  const { updateServers } = useServerssStore()
  const { isOpen, setIsOpen} = usePopupStore()

  const warning = useRef<HTMLInputElement>(null);

  const createNewServer = async (imageUrl:string) =>{

    const form = {
      serverName : serverName,
      image: imageUrl
    }
    const response = await axios.post('server/create', form);
    updateServers()
    setIsOpen(!isOpen)
    // Clear the form
    setSelectedFile(null);
    setImagePreview(undefined);
    setServerName("");
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!serverName){
      warning.current?.setCustomValidity("Name field can't be empty");
      return
    }
    try {
    if (selectedFile) {
      const name = (nanoid()+selectedFile.name)
      const storageRef = ref(storage, `logo/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, selectedFile)

       uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            createNewServer(url)
          })
        },
      )
      }else{
      const imageUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${serverName}`
        createNewServer(imageUrl)
      }

    } catch (error) {
      console.log(error);
    }
  };

  // Implement your create account form here
  return (
    <>
      <div className="create_server_form">
        <div className="form_div">
          <div className="form_header">
            <h1 className="form_header_h1">Customize your server</h1>
            <p className="form_header_p">
              Give your new server a personality with a name and an icon. You
              can always change it later.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="server_form_label" htmlFor="server-image">
                {selectedFile ? (
                  <img
                    className="server_icon_preview"
                    src={imagePreview}
                    alt="Image Preview"
                  />
                ) : (
                  <UploadImage />
                )}
              </label>
              <input
                className="server_form_input image_input"
                id="server-image"
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setSelectedFile(file);
                    setImagePreview(url);
                  }
                }}
              />
            </div>
            <div className="mb_4">
              <label className="server_form_label" htmlFor="server-name">
                Server Name
              </label>
              <input
                className="server_form_input"
                id="server-name"
                type="text"
                ref={warning}
                placeholder="Enter server name"
                value={serverName}
                onChange={(event) => setServerName(event.target.value)}
              />
            </div>
            <div className="button_div">
              <button className="create_server_btn" type="submit">
                Create Server
              </button>
            </div>
          </form>
        </div>
      </div>
    </>)
	};


	export default CreateServerForm