import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ConfirmCancelPage from '../../pages/confirmCancelPage/ConfirmCancelPage.component';
import './ClearAllButton.style.scss';
function ClearAllButton() {
    const [displayConfirmation,setDisplayConfirmation]=useState(false)
    
    return (
    <div>
        <div className='clearButtonContainer'>
            <Button 
                variant="contained" 
                color='secondary' 
                className='clearButton' 
                onClick={()=>setDisplayConfirmation(!displayConfirmation)}
            >
                Clear All Data
            </Button>
            {displayConfirmation?
            <div className='confirmCancelContainer'>
                <ConfirmCancelPage onCancelClick={()=>setDisplayConfirmation(!displayConfirmation)}/>
            </div>
            :''}
        </div>
    </div>
    )
}

export default ClearAllButton
