import React from 'react';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import './index.css';

export default function Root () {

  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('_auth')
    console.log(token);
    
    // set headers here
    config.headers.Authorization = `Bearer ${token}`;
  
    return config;
  });
  
  axios.defaults.baseURL = 'http://localhost:4000';
  
  return (
    <React.StrictMode>
      <AuthProvider authName="_auth" authType="localstorage">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
}
