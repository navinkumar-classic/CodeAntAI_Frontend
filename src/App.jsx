import { useState } from 'react'
import './App.css'
import Signin from './assets/Signin'
import MainPage from './assets/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
