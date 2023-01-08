import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { Input } from '../../common/Input/Input'
import { Select } from '../../common/Select/Select'
import { TextArea } from '../../common/TextArea/TextArea'
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
},
{
  lbl:'Hobbies',
  tag:'input',
  type:'checkbox',
  name:'hobbies',
  val:'FB,HOC' ,
  values:['CRIC','FB','HOC'],
  options: ['Cricket','FootBall','Hockey'],
  errMsg:'Please select Hobbies',
  isShow:false
},
{
  lbl:'Country',
  tag:'select',
  name:'country',
  val:' ',
  values:['IND','CANA','USA'],
  options: ['INDIA','CANADA','USA'],
  errMsg:'Please Select Country',
  isShow:false
},
{
  lbl:'Address',
  tag:'textarea',
  name:'address',
  val:'2 Silver Maple Court',
  errMsg:'Please enter Address',
  isShow:false
}

]

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
        return <Select data={{...obj,fnChange}}></Select>
        case 'textarea':
        return <TextArea data={{...obj,fnChange}}></TextArea>
        

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
