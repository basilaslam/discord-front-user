// import { useState, useRef } from 'react';
// import { type UserData, isValid } from './validator/formValidator';
// import { useNavigate } from 'react-router-dom';
// import axios, { AxiosError } from 'axios';
// import { saveToken } from '../../../Auth_Action/auth.action';
// import React from 'react';
// function SignUp () {
//   const redirect = useNavigate();
//   const email = useRef<HTMLParagraphElement>(null);
//   const username = useRef<HTMLParagraphElement>(null);
//   const password = useRef<HTMLParagraphElement>(null);
//   const dob = useRef<HTMLParagraphElement>(null);
//   const confirmPassword = useRef<HTMLParagraphElement>(null);

//   const validateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     const name = e.target.name;
//     const value = e.target.value;
//     switch (name) {
//       case 'email':
//         if (email.current)
//         if (emailRegex.test(value)) {
//           email.current.innerText = '';
//         } else {
//           email.current.innerText = 'enter valide email address';
//         }
//         break;

//       case 'password':
//         if(password.current)
//         if (passwordRegex.test(value)) {
//           password.current.innerText = '';
//         } else {
//           password.current.innerText = `enter a valide Password 
//           *password must contain 8 letters
//           * password must contain atleast one special charecter`;
//         }
//         break;
//       case 'dob[3]':
//         if(dob.current)
//         if (parseInt(value) < 1950 || parseInt(value) > 2005) {
//           dob.current.innerText = 'Enter a valid Year';
//         } else {
//           dob.current.innerText = '';
//         }
//         break;
//       case 'dob[2]':
//         if(dob.current)
//         if (parseInt(value) < 0 || parseInt(value) > 12) {
//           dob.current.innerText = 'entered an invalid month';
//         } else {
//           dob.current.innerText = '';
//         }
//         break;
//       case 'confirmPassword':
//         if(confirmPassword.current)
//         if (value !== userData.password) {
//           confirmPassword.current.innerText = 'Password does not match';
//         } else {
//           confirmPassword.current.innerText = '';
//         }
//         break;

//       case 'dob[1]':
//         if(dob.current)
//         if (parseInt(value) < 0 || parseInt(value) > 31) {
//           dob.current.innerText = 'entered an invalid day';
//         } else {
//           dob.current.innerText = '';
//         }
//         break;

//       default:
//         break;
//     }
//   };

//   const [userData, setUserData] = useState<UserData>({
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     'dob[1]': '',
//     'dob[2]': '',
//     'dob[3]': ''
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
//       const date = new Array(3);
//       date[0] = parseInt(userData['dob[1]']!);
//       date[1] = parseInt(userData['dob[2]']!);
//       date[2] = parseInt(userData['dob[3]']!);
//       delete userData['dob[1]'];
//       delete userData['dob[2]'];
//       delete userData['dob[3]'];
//       userData.dob = String(date.join('-'));

//       try {
//         const responese = await axios.post('/auth/user/signup', userData);
//         console.log('hello');
//         saveToken(responese.data.accessToken.access_token);
//         redirect('/login');
//       } catch (err: any) {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen bg-bg_login">
//       <div className=" w-11/12 sm:w-4/5 md:w-3/4 lg:w-1/4 m-auto  bg-primary_gray rounded p-5 ">
//         <header className="text-center">
//           <h3 className=" font-semibold text-white text-2xl m-5">Welcome!</h3>
//           <p className=" text-white m-5">We're so excited to see you !</p>
//         </header>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="block mb-2 text-slate-300" htmlFor="username">
//               EMAIL
//             </label>
//             <p className=" text-red-700" ref={email}></p>
//             <input
//               className="w-full p-2 mb-6  text-white  outline-none bg-secondery_gray rounded-sm"
//               type="email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}

//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-slate-300" htmlFor="username">
//               USERNAME
//             </label>
//             <input
//               className="w-full p-2 mb-6  text-white  outline-none bg-secondery_gray rounded-sm"
//               type="text"
//               name="username"
//               value={userData.username}
//               onChange={handleChange}

//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-slate-300" htmlFor="password">
//               PASSWORD
//             </label>
//             <p className=" text-red-700 text-xs" ref={password}></p>
//             <input
//               className="w-full p-2 text-white  outline-none bg-secondery_gray rounded-sm"
//               type="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}

//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-slate-300" htmlFor="confirmPassword">
//               CONFIRM PASSWORD
//             </label>
//             <p className=" text-red-700 text-xs" ref={confirmPassword}></p>
//             <input
//               className="w-full p-2 text-white  outline-none bg-secondery_gray rounded-sm"
//               type="password"
//               name="confirmPassword"
//               value={userData.confirmPassword}
//               onChange={handleChange}

//             />
//           </div>

//           <div >
//             <label className="block mb-2 text-slate-300 mt-6" htmlFor="password" >
//               DATE OF BIRTH
//             </label>
//             <p className=" text-red-700" ref={dob}></p>
//             <div className="flex gap-8">
//             <input className="w-full p-2 text-white  outline-none bg-secondery_gray rounded-sm"
//               type="number"
//               name="dob[1]"
//               value={userData['dob[1]']}

//               onChange={handleChange}

//             />

//               <input className="w-full p-2 text-white  outline-none bg-secondery_gray rounded-sm"
//               type="number"
//               name="dob[2]"
//               value={userData['dob[2]']}
//               onChange={handleChange}

//             />

//             <input className="w-full p-2 text-white  outline-none bg-secondery_gray rounded-sm"
//               type="number"
//               name="dob[3]"
//               value={userData['dob[3]']}
//               onChange={handleChange}
//             />

//             </div>

//           </div>
//           <div>
//             <button
//               className="w-full bg-primary_blue hover:bg-secondery_blue  text-white  py-2 px-4 mb-6 rounded mt-10"
//               type="submit"
//               value="Continue"
//             >Continue</button>
//           </div>
//         </form>
//         <footer>
//           <a
//             className="text-primary_blue hover:underline text-sm float-right"
//             href="/"
//           >
//             Already have an account?
//           </a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSignIn } from "react-auth-kit";

const Register: React.FC = () => {
  const signIn = useSignIn()

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [updates, setUpdates] = useState(true);

const days: Array<string> = [];
for (let i = 1; i <= 31; i++) {
days.push(i.toString());
}
const years: Array<string> = [];
for (let i = 2019; i >= 1870; i--) {
years.push(i.toString());
}

const sendRegistrationDetails = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
const data = {
email,
username,
password,
};
      try {
          const responese = await axios.post('/auth/user/signup', data);
          navigate('/login');
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
};
  return (
    <div className="login-container">
        <div className="register-wrapper">
            <h2 className="register-h2">Create an account</h2>
            <form onSubmit={(e)=>sendRegistrationDetails(e)}>
                    <label htmlFor="email" className="login-label">email</label><br/>
                    <input type="email" id="email" name="email" className="login-input" value={email} onChange={(e)=> setEmail(e.target.value)} required /><br />
                    <label htmlFor="username" className="login-label">username</label><br/>
                    <input type="text" id="username" name="username" className="login-input" value={username} onChange={(e)=> setUsername(e.target.value)} required /><br />
                    <label htmlFor="password" className="login-label">password</label><br/>
                    <input type="password" id="password" name="password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} required />
                    {/*<label className="login-label">date of birth</label><br/>
                    <div className="d-flex justifly-content-between">
                         <Dropdown options={months} placeholder="Month" value={month} onChange={(e)=> setMonth(e.value)} className="flex-[1] mr-[10px]" controlClassName="bg-[#36393f] text-[#8e9297] border-[1px] border-[#23272a]" menuClassName="bg-[#36393f] border-[1px] border-[#23272a] [&>*]:text-[#8e9297] hover:[&>*]:bg-[#23272a] hover:[&>*]:text-[#8e9297] [&>*.is-selected]:bg-[#202225] [&>*.is-selected]:text-[#8e9297] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#23272a] [&::-webkit-scrollbar-thumb]:rounded-[5px]" />
                        <Dropdown options={days} placeholder="Day" value={day} onChange={(e)=> setDay(e.value)} className="flex-[1] mr-[10px]" controlClassName="bg-[#36393f] text-[#8e9297] border-[1px] border-[#23272a]" menuClassName="bg-[#36393f] border-[1px] border-[#23272a] [&>*]:text-[#8e9297] hover:[&>*]:bg-[#23272a] hover:[&>*]:text-[#8e9297] [&>*.is-selected]:bg-[#202225] [&>*.is-selected]:text-[#8e9297] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#23272a] [&::-webkit-scrollbar-thumb]:rounded-[5px]" />
                        <Dropdown options={years} placeholder="Year" value={year} onChange={(e)=> setYear(e.value)} className="flex-[1]" controlClassName="bg-[#36393f] text-[#8e9297] border-[1px] border-[#23272a]" menuClassName="bg-[#36393f] border-[1px] border-[#23272a] [&>*]:text-[#8e9297] hover:[&>*]:bg-[#23272a] hover:[&>*]:text-[#8e9297] [&>*.is-selected]:bg-[#202225] [&>*.is-selected]:text-[#8e9297] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#23272a] [&::-webkit-scrollbar-thumb]:rounded-[5px]" /> 
                         </div>
                         */}
                   
                    <button type="submit" className="login-submit">Continue</button>
                    <Link to='/login'><p className="login-forgot-password">Already have an account?</p></Link>
                    <p className="agree-tac-message">By registering, you agree to Discord's <span className="agree-tac-span">Terms of Service</span> and <span className="text-[#00aff4] font-medium">Privacy Policy</span></p>                                              
                </form>
        </div>
    </div>
  );
}

export default Register;