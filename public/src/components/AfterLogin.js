import React from 'react'
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route,Navigate, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile'
import { connect } from 'react-redux';
import  Tabs  from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import { appStore } from '../store/appStore';
let AfterLogin = (props) => {
  
const {isLoggedIn}=props;  

const handleClick=(eve)=>{
  localStorage.clear();
appStore.dispatch({type:'AUT', isLoggedIn:false})
}

  return (
    
    <div >
   <BrowserRouter>
   <b className='userID'>{localStorage.uid}</b>
      
        <Navbar>
          <Container className=" justify-content-end">
            
              
              
                        
              <Nav >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={handleClick} href="/login">Logout</Nav.Link>
              </Nav>
              
          
          </Container>
        </Navbar>
  
   
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
      { isLoggedIn && <Route path='*' element={<Navigate to='/home'/>}/>}
       
        </Routes>
</BrowserRouter>


    </div>
  )
}

AfterLogin=connect((state)=>{
  return {
   isLoggedIn:state.appReducer.isLoggedIn,
   isShowLodder:state.appReducer.isShowLodder
  }
  })(AfterLogin)


export default AfterLogin;