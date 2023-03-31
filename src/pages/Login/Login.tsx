
import axios from "axios";
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSignIn } from 'react-auth-kit'
import { useUserStore } from "../../store/zustand";
const Login: React.FC = () => {
  const signIn = useSignIn()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore()

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

                  console.log(responese.data.result)
                  setUser(responese.data.result)
                  console.log(responese.data.result);
                  
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
                    <p className="login-need-account">Need an account? <span className="login-need-account-span"><Link to="/register" className="hover_underline">Register</Link></span></p>                                              
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;