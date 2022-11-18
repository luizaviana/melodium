import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resul from "./Resultado";
import './css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App />} />
          <Route path="result/:id" element={<Resul />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
