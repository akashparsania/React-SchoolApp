import React from 'react'
import './Select.css'
export const Select = (props) => {
 
    const {data}=props;
    const {type,name,lbl,fnChange,val,errMsg,isShow,values,options}=data;
     
    return (
    
        
        
    
        <div className="row  mb-3">
            <div className='col-sm-5 text-end'>
                <b>{lbl}:</b>
            </div>
    
            <div className='col-sm-2 text-start '>
              <select name={name} onChange={fnChange} className='form-control'>
               <option value=''>Please select Country</option> 
                {   
                    options.map((opt,index)=>{
                        return <option key={index} selected ={val==values[index]} value={values[index]} >{opt}</option>
                    })
                }
              </select>
                
            </div>
    
            <div className='col-sm-5 text-start '>
               {isShow && <b className='text-danger'>{errMsg}</b>}
            </div>
               
            
        </div>
            
        
      )
}
