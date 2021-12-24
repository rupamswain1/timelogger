import React from 'react'

import './ModalWrapper.style.scss'

const ModalWrapper=(props)=>{
    return (
        <div className='modalWrapper'>
            {props.children}
        </div>
    )
}

export default ModalWrapper;
