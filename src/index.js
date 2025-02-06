import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Impressum from './pages/impressum/impressum.page';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Datenschutz from './pages/datenschutz/datenschutz.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <ScrollToTop/>
            <Routes>
            <Route path='/' element={<App />}/>

            <Route path='impressum' element={<Impressum/>}/>
            <Route path='datenschutz' element={<Datenschutz/>}/>

          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
