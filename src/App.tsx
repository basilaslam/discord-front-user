import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUP';
import Dashbord from './pages/dashboard/Dashboard';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import Test from './pages/Test/test';
import React from 'react';


function App () {
  
  return (
    <AuthProvider authType = {'localstorage'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
      <Routes>
        <Route path="/app" element={<RequireAuth loginPath='/login'><Dashbord /></RequireAuth>} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
