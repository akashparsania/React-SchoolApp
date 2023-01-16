import React from 'react'
import './Input.css'
export const Input = (prop) => {
   
const {data}=prop;
const {type,name,lbl,fnChange,val,errMsg,isShow,values,options}=data;

const prepareInputControl=()=>{
    
        switch(type){
            case 'text':
                return  <input onChange={fnChange} className='form-control' name={name} value={val} type={type}/>
            case 'password':
                return  <input onChange={fnChange} className='form-control' name={name} value={val} type={type}/>
            case 'number': 
                return  <input onChange={fnChange} className='form-control' name={name} value={val} type={type}/>
            break;
            
            case 'radio':
                   return options.map((opt,index)=>{
                        return <><input onChange={fnChange} checked={values[index]==val} name={name} value={values[index]} type={type}/><b className='me-2'>{opt}</b> </>
                    
                    })
                
            case 'checkbox':
                let checkedValues=val.split(',');
                return options.map((opt,index)=>{
                    return <React.Fragment><input onChange={fnChange}  checked={checkedValues.includes(values[index])} name={name} id={values[index]} value={values[index]} type={type}/><b className='me-1'>{opt}</b> </React.Fragment>
                
                })
            
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
