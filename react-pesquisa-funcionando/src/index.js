import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./Sobre";
import './css/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App />} />
          <Route path="blogs/:id" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
