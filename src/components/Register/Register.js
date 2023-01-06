import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { Input } from '../../common/Input/Input'

const inputValues=[{
  lbl:'User Name',
  tag:'input',
  type:'text',
  name:'uid',
  val:'akash',
  errMsg:'Please enter User ID',
  isShow:false
},
{
  lbl:'Password',
  tag:'input',
  type:'password',
  name:'pwd',
  val:'123',
  errMsg:'Please enter Password',
  isShow:false
},
{
  lbl:'Phone',
  tag:'input',
  type:'number',
  name:'phone',
  val:'6488975678',
  errMsg:'Please enter Phone Number',
  isShow:false
},
{
  lbl:'Gender',
  tag:'input',
  type:'radio',
  name:'gender',
  val:'M',
  values:['M','F'],
  options: ['Male','Female'],
  errMsg:'Please select Gender',
  isShow:false
}]

export const Register = () => {
  const [temp,setTemp]=useState('');

  useEffect(()=>{
    fnPrepareTemplate();
  },[])
  const fnPrepareTemplate=()=>{
    let inputControlsArray=inputValues.map((obj,index)=>{
      switch(obj.tag){
        case 'input':
          return <Input data={{...obj,fnChange}}/>
        case'select':
        return
        case 'textarea':
        return

      }
    })
    setTemp(inputControlsArray)

  }
  const fnChange=()=>{

  }

  

  const fnRegister=()=>{

   
  }



  return (
    <div className='container-fluid'>
      <h1 className='text-centre mb-4 mt-3'>Registration Page</h1>
      {temp}
      <div className='row '>
        <div className='offset-sm-5 col-sm-7 text-start'>
         <button onClick={fnRegister} className="btn btn-outline-dark me-3">Register</button>
         <Link to='/login'>To Login</Link>
        </div>    
      </div>
    </div>
  )
}
