import React from 'react'
import Button from '@material-ui/core/Button';

import './ConfirmationDialog.style.scss'

const ConfirmationDialog=({onCancelClick,heading,content})=>{
    return (
        <div className='confirmationDialog' onClick={onCancelClick}>
            <div className='confirmationDialog__headingContainer'>
                <h2 className='confirmationDialog__heading'>
                    {heading}
                </h2>
            </div>
            <div className='confirmationDialog__contentContainer'>
                {content}
            </div>
            <div className='confirmationDialog__buttonContainer'>
                <Button variant="contained" color='secondary' className='clearButton' >Cancel</Button>
                <Button variant="contained" color='primary' className='clearButton' name='confirmAction' id='confirmAction'>Confirm</Button>
            </div>
        </div>
    )
} 

export default ConfirmationDialog
