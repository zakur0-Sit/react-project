import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Home from './pages/home/home';
import RequestAssistance from './pages/request assistance/request';
import MessagesPage from './pages/messages_page/messages_page';
import Account from './pages/account/account';
import DoctorAccount from './pages/doctor_account/doctor_account';
import DoctorPreview from './pages/doctor_preview/doctor_preview';
import Notifications from './pages/notifications/notifications';
import Admin from './pages/admin/admin';
import ResetPassword from './pages/reset_password/reset_password';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" component={Home} />
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/request-assistance" element={<RequestAssistance/>} />
        <Route path="/messages" element={<MessagesPage/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/doctor-account" element={<DoctorAccount/>} />
        <Route path="/doctor-preview" element={<DoctorPreview/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
