import React from 'react'
import './Input.css'
export const Input = (props) => {
   
const {data}=props;
const {type,name,lbl,fnChange,val,errMsg,isShow,values,options}=data;
 
const prepareInputControl=()=>{
    
        switch(type){
            case 'text':
            case 'password':
            case 'number': 
                return  <input onChange={fnChange} className='form-control' name={name} value={val} type={type}/>
            
            
            case 'radio':
                   return options.map((opt,index)=>{
                        return <><input onChange={fnChange} checked={values[index]==val} name={name} value={values[index]} type={type}/><b className='me-2'>{opt}</b> </>
                    
                    })
                

                
                break;
        }
    
}
    return (
    
        
        
    
    <div className="row  mb-3">
        <div className='col-sm-5 text-end'>
            <b>{lbl}:</b>
        </div>

        <div className='col-sm-2 text-start '>
           {prepareInputControl()}
            
        </div>

        <div className='col-sm-5 text-start '>
           {isShow && <b className='text-danger'>{errMsg}</b>}
        </div>
           
        
    </div>
        
    
  )
}
