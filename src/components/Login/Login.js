import React,{useEffect,useState} from 'react'
import './Login.css'
import { Input } from '../../common/Input/Input'


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
       
            <h1 className='text-center mb-4 mt-3'>Login</h1>
       
        {temp}
       
    <div className='row container-fluid mb-3'>
      <div className='col-sm-5'> </div>
        <div className='col-sm-2  text-start'>
        <button onClick={fnLogin} type="button" className="btn btn-outline-dark">Login</button>
        </div>
        
    </div>

    
    </div>
  )
}
