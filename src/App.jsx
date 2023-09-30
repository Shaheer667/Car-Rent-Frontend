import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Login from './assets/Pages/Login'
import Signup from './assets/Pages/Signup'
import Booking from './assets/Pages/Booking'

const App = () => {
  return (
    <div><BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Booking' element={<Booking/>}></Route>
        <Route path='/Booking/:id' element={<Booking/>}></Route>
        </Routes>
    </BrowserRouter></div>
  )
}

export default App