import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { Input } from '../../common/Input/Input'
import { Select } from '../../common/Select/Select'
import { TextArea } from '../../common/TextArea/TextArea'
import { regFormValidations } from '../../validations/regFormValidations'
import { ServerCall } from '../../shared/ServerCall'
import { toast } from 'react-toastify'
const inputValues=[{
  lbl:'User Name',
  tag:'input',
  type:'text',
  name:'uid',
  val:'',
  errMsg:'',
  isShow:false
},
{
  lbl:'Password',
  tag:'input',
  type:'password',
  name:'pwd',
  val:'',
  errMsg:'',
  isShow:false
},
{
  lbl:'Phone',
  tag:'input',
  type:'number',
  name:'phone',
  val:'',
  errMsg:'',
  isShow:false
},
{
  lbl:'Gender',
  tag:'input',
  type:'radio',
  name:'gender',
  val:'',
  values:['M','F'],
  options: ['Male','Female'],
  errMsg:'',
  isShow:false
},
{
  lbl:'Hobbies',
  tag:'input',
  type:'checkbox',
  name:'hobbies',
  val:'' ,
  values:['CRIC','FB','HOC'],
  options: ['Cricket','FootBall','Hockey'],
  errMsg:'',
  isShow:false
},
{
  lbl:'Country',
  tag:'select',
  
  name:'country',
  val:'',
  values:['IND','CANA','USA'],
  options: ['INDIA','CANADA','USA'],
  errMsg:'',
  isShow:false
},
{
  lbl:'Address',
  tag:'textarea',
  type:'textarea',
  name:'address',
  val:'',
  errMsg:'',
  isShow:false
}

]

export const Register = () => {
  const [temp,setTemp]=useState('');

  useEffect(()=>{
    fnPrepareTemplate();
  },[])
  const fnPrepareTemplate=()=>{
    let inputControlsArray=inputValues.map((obj)=>{
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
  const fnChange=(eve)=>{
      
      const {name,value,type,checked,id}=eve.target;
      //console.log(eve.target);
     let inputObj= inputValues.find((obj)=>{
      
       return  obj.name==name
      
      })
    
      if(type=='checkbox'){
        let selHobbies=[]
        if(inputObj.val){
          selHobbies=inputObj.val.split(',')
        }
        if(checked){
          selHobbies.push(id)
        
          
          
        }
        else{
          selHobbies.splice(selHobbies.indexOf(id),1);


        }
        inputObj.val=selHobbies.join();
        
      }else{
      inputObj.val=value;
      
      }
      
      regFormValidations(inputObj);
      fnPrepareTemplate()
     
      //inputObj.isShow=value ? false : true
      
    
    
      
    
  }

  

  const fnRegister=()=>{
    //url:https://serverapp.herokuapp.com/reg/reg-std
    //method:post
    //data format: { payload:{}   }
    
let isFormValid=true;
let data={};
    inputValues.forEach((inputObj)=>{

      regFormValidations(inputObj)

      const{name,val,errMsg}=inputObj;
      
      data[name]=val;
      
      
      if(errMsg){
        isFormValid=false;
      }
    })
    fnPrepareTemplate();
    if(!isFormValid) return
              
              ServerCall.sendPost('reg/reg-std',{payload:data}) 
              .then((res)=>{
                console.log(res)
                const{acknowledged,insertedId}=res.data
                if(acknowledged&&insertedId){
                  toast.success('Registration Successful')
                  inputValues.forEach((inputObj)=>{
                    
                    inputObj.val=''
                    inputObj.errMsg=''
                    inputObj.isShow=false
                    
                    
                  })
                  fnPrepareTemplate();
                }
                else{
                  toast.error('TRY AGIAN')
                }

              })
              .catch((err)=>{
                toast.error('Something Went Wrong')
              })


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
