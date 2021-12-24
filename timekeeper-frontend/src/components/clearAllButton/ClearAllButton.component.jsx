import React from 'react'
import Button from '@material-ui/core/Button';
import './ClearAllButton.style.scss';
function ClearAllButton() {
    return (
        <div className='clearButtonContainer'>
            <Button variant="contained" color='secondary' className='clearButton'>Clear All Data</Button>
        </div>
    )
}

export default ClearAllButton
