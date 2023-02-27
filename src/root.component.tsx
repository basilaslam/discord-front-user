import React from 'react';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import './index.css';

export default function Root () {
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
