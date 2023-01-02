import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { Login } from './Login/Login'
import { Register } from './Register/Register'

export const BeforeLogin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Navigate to='/Login'/>}/>
        </Routes>
      </BrowserRouter>


      
    </div>
  )
}
