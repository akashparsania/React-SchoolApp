import React,{useEffect,useState} from 'react'
import './Login.css'
import { Input } from '../../common/Input/Input'
import { Link } from 'react-router-dom'


const inputValues=[{
    lbl:'User Name',
    type:'text',
    name:'uid',
    val:'',
    errMsg:'Please enter User ID',
    isShow:false
},{
    lbl:'Password',
    type:'password',
    name:'pwd',
    val:'',
    errMsg:'Please enter Password',
    isShow:false
}]



export const Login = (props) => {
const [temp,setTemp]=useState('');

useEffect(()=>{
prepareTemplate();
},[])

const fnChange=(eve)=>{
  const {name,value}=eve.target;
 let inputObj= inputValues.find((obj)=>{
   return  obj.name==name
  })
  inputObj.val=value;
  inputObj.isShow=value ? false : true
  
 
  prepareTemplate();


}
  const prepareTemplate=()=>{

    let inputControlsArray=inputValues.map((obj)=>{
      return <Input  data={{...obj, fnChange}}/>        
  })
  console.log(inputControlsArray)
  setTemp(inputControlsArray);
  }
  
const fnLogin=()=>{
  let isFormValid=true;
  inputValues.forEach((obj)=>{
    if(!obj.val){
      isFormValid=false;
      obj.isShow=true;
    }
  })

  if(!isFormValid){
    prepareTemplate()

  } else{
    alert('Send Req')  
  }
  
}

  return (
    <div className='container-fluid'>
      <h1 className='text-center mt-3 mb-4'>Login</h1>
       {temp}
       <div className='row '>
        <div className='offset-sm-5 col-sm-7 pl-1 text-start'>
         <button onClick={fnLogin} className="btn btn-outline-dark me-3">Login</button>
         <Link to='/register'>To Register</Link>
        </div>    
      </div>
    </div>
  )
}
