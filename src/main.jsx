import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './routes/Login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
