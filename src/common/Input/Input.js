import React from 'react'
import './Input.css'
export const Input = (props) => {
   
const {data}=props;
const {type,name,lbl,fnChange,val,errMsg,isShow}=data;
 
    return (
    
    <div className="row container-fluid mb-3">
        <div className='col-sm-5 text-end'>
            <b>{lbl}:</b>
        </div>

        <div className='col-sm-2 text-start'>
            <input onChange={fnChange} className='form-control' name={name} value={val} type={type}/>
        </div>

        <div className='col-sm-5 text-start '>
            <b className='text-danger'>{isShow?errMsg:''} </b>
        </div>
           
        
    </div>
  )
}
