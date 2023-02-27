// import React from 'react';
// import axios from 'axios';
// import { isValid, type userData } from './validator/loginValidator';
// import { useNavigate } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import { useSignIn } from 'react-auth-kit';

// function Login () {
//   const signIn = useSignIn();
//   const redirect = useNavigate();
//   const email = useRef<HTMLParagraphElement>(null);
//   const password = useRef<HTMLParagraphElement>(null);

//   const validateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     const name = e.target.name;
//     const value = e.target.value;
//     switch (name) {
//       case 'email':
//         if (emailRegex.test(value) && email.current !== null) {
//           email.current.innerText = '';
//         } else {
//           if(email.current !== null){
//             email.current.innerText = 'enter valide email address';
//           }
          
//         }
//         break;

//       case 'password':
//         if (passwordRegex.test(value) && password.current !== null) {
//           password.current.innerText = '';
//         } else {
//           if (passwordRegex.test(value) && password.current !== null) {
//             password.current.innerText = `enter a valide Password 
//           *password must contain 8 letters
//           * password must contain atleast one special charecter`;
//           }
          
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   const [userData, setUserData] = useState<userData>({
//     email: '',
//     password: ''

//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setUserData({
//       ...userData,
//       [name]: value
//     });
//     validateForm(e);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isValid(userData)) {
//       try {
//         const responese = await axios.post('/auth/user/login', userData);
//         signIn({
//           token: responese.data.accessToken.access_token,

//           expiresIn: 50,
//           tokenType: 'Bearer',
//           authState: { email: userData.email }

//         });
//         // saveToken(responese.data.accessToken.access_token)
//         redirect('/');
//       } catch (err: any) {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen bg-bg_login">
//       <div className=" w-11/12 sm:w-4/5 md:w-3/4 lg:w-1/4 m-auto  bg-primary_gray rounded p-5 ">
//         <header className="text-center">
//           <h3 className=" font-semibold text-white text-2xl m-5">
//             Welcome back!
//           </h3>
//           <p className=" text-gray-500 m-5">
//             We're so excited to see you again!
//           </p>
//         </header>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="block mb-2 text-gray-500 test"  htmlFor="username">
//               Email or Phone Number
//             </label>
//             <p ref={email}></p>
//             <input
//               className="w-full p-2 mb-6  text-gray-500  outline-none bg-secondery_gray"
//               type="email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-500" htmlFor="password">
//               Password
//             </label>
//             <p ref={password}></p>
//             <input
//               className="w-full p-2 text-gray-500  outline-none bg-secondery_gray"
//               type="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//             />
//             <a
//               className="text-primary_blue mb-6 hover:underline m-0 text-sm float-left"
//               href="/"
//             >
//               Forgot Password?
//             </a>
//           </div>
//           <div>
//             <button
//               className="w-full bg-primary_blue hover:bg-secondery_blue  text-white  py-2 px-4 mb-6 rounded"
//               type="submit"
//             >Continue</button>
//           </div>
//         </form>
//         <footer>
//           <a
//             className="text-primary_blue hover:underline text-sm float-right"
//             href="/"
//           >
//             Create Account
//           </a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Login;


import axios, { AxiosError } from "axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSignIn } from 'react-auth-kit'

const Login: React.FC = () => {
  const signIn = useSignIn()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const sendLoginDetails = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
          email,
          password
      }
      try{
        const responese = await axios.post('/auth/user/login', data);
        signIn({
                    token: responese.data.accessToken.access_token,
          
                    expiresIn: 50,
                    tokenType: 'Bearer',
                    authState: { email: data.email }
          
                  });
              navigate('/app')
      }catch(error:any){
        console.log(error.response.data.statusCode)
        console.log(error.response.data.message)
      }
      

      

      
      setEmail("");
      setPassword("");
  }
  return (
    <div className="login-container">
        <div className="login-divs-wrapper">
            <div className="login-left">
                <h2 className="login-left-h2">Welcome back!</h2>
                <p className="login-left-p">We're so exited to see you again!</p>
                <form onSubmit={(e)=>sendLoginDetails(e)}>
                    <label htmlFor="emailorphone" className="login-label">email or phone number</label><br/>
                    <input type="text" id="emailorphone" name="emailorphone" className="login-input mb-10" value={email} onChange={(e)=> setEmail(e.target.value)} required /><br />
                    <label htmlFor="password" className="login-label">password</label><br/>
                    <input type="password" id="password" name="password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} required />
                    <p className="login-forgot-password"><Link to="/login" className="hover_underline">Forgot your password?</Link></p>
                    <button type="submit" className="login-submit">Login</button>
                    <p className="login-need-account">Need an account? <span className="login-need-account-span"><Link to="/signup" className="hover_underline">Register</Link></span></p>                                              
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;