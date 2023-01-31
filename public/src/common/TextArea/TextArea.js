import React from 'react'
import './TextArea.css'
export const TextArea = (props) => {
    const {data}=props;
    const {type,name,lbl,fnChange,val,errMsg,isShow,values,options}=data;
     
    return (
    
        
        
    
        <div className="row  mb-3">
            <div className='col-sm-5 text-end'>
                <b>{lbl}:</b>
            </div>
    
            <div className='col-sm-2 text-start '>
              <textarea value={val} name={name} onChange={fnChange} className='form-control'>
              </textarea>
                
            </div>
    
            <div className='col-sm-5 text-start '>
               {isShow && <b className='text-danger'>{errMsg}</b>}
            </div>
               
            
        </div>
            
        
      )
}
