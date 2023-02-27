/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef} from "react";
import UploadImage from "../../assets/iconComponents/uploadImage";
import axios from "axios";
const CreateServerForm = ({ onClick }: { onClick?: () => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [serverName, setServerName] = useState<string>("");
  const warning = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!serverName){
      
    }
    try {
      let imageUrl;
    if (selectedFile) {
      
    


      const {data} = await axios.get('/s3/getUrl')
      // using fetch because axios is not sending the file properly
      const res = await fetch(data, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: selectedFile,
      });

console.log(res);

       imageUrl = data.split('?')[0]
      // Add Server



      }else{
        imageUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${serverName}`
      }
      const form = {
        serverName : serverName,
        image: imageUrl
      }

      const response = await axios.post('server/create', form);


        console.log(response)

      console.log(imageUrl)
      // Clear the form
      setSelectedFile(null);
      setImagePreview(undefined);
      setServerName("");

      // Call the onClick prop to close the form
      if (onClick) {
        onClick();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Implement your create account form here
  return (
    <>
      <div onClick={onClick} className="bg_gray"></div>
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
                {imagePreview ? (
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
              <p ref={warning}></p>
              <label className="server_form_label" htmlFor="server-name">
                Server Name
              </label>
              <input
                className="server_form_input"
                id="server-name"
                type="text"
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