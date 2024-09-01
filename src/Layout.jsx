import React, {useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
 
//   localStorage.clear();
  const isAuthenticated = localStorage.getItem('authCredentials');
  return isAuthenticated ? (
    <div >
     <Outlet />
    </div>
  ) : <Navigate to="/" />;
};

export default Layout;


