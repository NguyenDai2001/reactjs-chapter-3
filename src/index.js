import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Header/Home';
import Admins from './components/Header/Admins';
import Users from './components/Header/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admins" element={<Admins />} />
      </Route>

    </Routes>
  </BrowserRouter>
);

