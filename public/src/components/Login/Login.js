import React,{useEffect,useState} from 'react'
import './Login.css'
import { Input } from '../../common/Input/Input'
import { Link } from 'react-router-dom'
import { ServerCall } from '../../shared/ServerCall'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

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
  const dispatch=useDispatch();
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

    let inputControlsArray=inputValues.map((obj,index)=>{
      return <Input key={index}  data={{...obj, fnChange}}/>        
  })
  
  setTemp(inputControlsArray);
  }
  
const fnLogin= async ()=>{
  
  let isFormValid=true;
  let dataObj={};
  inputValues.forEach((obj)=>{
    dataObj[obj.name]=obj.val;
    if(!obj.val){
      isFormValid=false;
      obj.isShow=true;
    }
  })
  prepareTemplate()
  if(!isFormValid)return;
  dispatch({type:'LOADER',payload:true})
  const res=await ServerCall.sendPost('reg/login',{payload:dataObj})
  dispatch({type:'LOADER',payload:false})
const {status,data}=res;
if(status==200){
  if(data){
const{uid,_id,token}=data;
localStorage.token=token;
localStorage.setItem('uid',uid);
localStorage.id=_id;
dispatch({type:'AUT',payload:true})
console.log()
  }else{
    toast.error('UserID or Password Invalid')
  }

}else{
  toast.error('Something went Wrong')
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
