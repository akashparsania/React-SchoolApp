import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { connect } from 'react-redux';

let  BeforeLogin = (props) => {
  const {isLoggedIn}=props;
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {!isLoggedIn && <Route path='*' element={<Navigate to='/Login'/>}/>}
        </Routes>
      </BrowserRouter>


      
    </div>
  );
}

 BeforeLogin=connect((state)=>{
    return {
     isLoggedIn:state.appReducer.isLoggedIn,
     isShowLodder:state.appReducer.isShowLodder
    }
    })(BeforeLogin)


export default BeforeLogin;
