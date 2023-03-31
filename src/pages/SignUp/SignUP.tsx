import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSignIn } from "react-auth-kit";
import { useUserStore } from "../../store/zustand";
import storage from '../../firebase/firebaseConfig'
import UploadImage from "../../assets/iconComponents/uploadImage";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {nanoid} from 'nanoid'
import 'firebase/storage';

const Register: React.FC = () => {
  const signIn = useSignIn()
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updates, setUpdates] = useState(true);
  const { setUser } = useUserStore()
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [progressUpload, setProgressUpload] = useState(0)
  
  
  
  const days: Array<string> = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i.toString());
  }
  const years: Array<string> = [];
  for (let i = 2019; i >= 1870; i--) {
    years.push(i.toString());
  }
  
const create_user = async (url:string) => {
  const data = {
    image:url,
    email,
    username,
    password,
    };
  try {
        
    const responese = await axios.post('/auth/user/signup', data);
    
    setUser(responese.data.result)

    signIn({
      token: responese.data.accessToken.access_token,
      expiresIn: 50,
      tokenType: 'Bearer',
      authState: { email: data.email }

    });
  } catch (err: any) {
    console.log(err);
  }


navigate("/app");
setEmail("");
setUsername("");
setPassword("");
setUpdates(true);
}

const sendRegistrationDetails = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();


try {
  if (selectedFile) {
    const name = (nanoid()+selectedFile.name)
    const storageRef = ref(storage, `profile/${name}`)
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
          create_user(url)
        })
      },
    )
    }else{
    const imageUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${username}`
      create_user(imageUrl)
    }

  } catch (error) {
    console.log(error);
  }

};
  return (
    <div className="login-container">
        <div className="register-wrapper">
            <h2 className="register-h2">Create an account</h2>
            <div className="mb-4">
              <label className="server_form_label" htmlFor="server-image">
                {selectedFile ? (
                  <img
                    className="server_icon_preview"
                    src={imagePreview}
                    alt="Image Preview"
                  />
                ) : (
                      <UploadImage color={"#FFFF"}/>
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

            <form onSubmit={(e)=>sendRegistrationDetails(e)}>
                    <label htmlFor="email" className="login-label">email</label><br/>
                    <input type="email" id="email" name="email" className="login-input" value={email} onChange={(e)=> setEmail(e.target.value)} required /><br />
                    <label htmlFor="username" className="login-label">username</label><br/>
                    <input type="text" id="username" name="username" className="login-input" value={username} onChange={(e)=> setUsername(e.target.value)} required /><br />
                    <label htmlFor="password" className="login-label">password</label><br/>
                    <input type="password" id="password" name="password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} required />                   
                    <button type="submit" className="login-submit">Continue</button>
                    <Link to='/login'><p className="login-forgot-password">Already have an account?</p></Link>
                    <p className="agree-tac-message">By registering, you agree to Discord's <span className="agree-tac-span">Terms of Service</span> and <span className="text-[#00aff4] font-medium">Privacy Policy</span></p>                                              
                </form>
        </div>
    </div>
  );
}

export default Register;