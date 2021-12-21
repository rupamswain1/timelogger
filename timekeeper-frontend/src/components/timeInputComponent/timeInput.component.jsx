import React from 'react'

function TimeInput({id,placeHolder,value,cls}) {
    
    return (
        <>
        <input 
            className={cls} 
            placeholder={placeHolder} 
            type='text' 
            name={id}  
            id={id} 
            value={value} 
            maxLength='1'
            disabled={id!==0?true:false}
        >
        </input>
        {
            id%2!==0?<div className='timerText'>{placeHolder}</div>:''
        } 
        
        </>
    )
}

export default TimeInput;
