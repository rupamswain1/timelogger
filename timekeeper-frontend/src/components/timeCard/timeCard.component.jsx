import React from 'react'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import TimeInput from '../timeInputComponent/timeInput.component';
function TimeCard({onChange,onFocus,onKeyDown,timeState,timeBoxes,cls,displayCondition,timeArr,totalTime,key,submitTime}) {
    return (
        <div className='timcardsContainer' onChange={onChange} onFocus={onFocus} onKeyDown={onKeyDown}>
            {timeState.length>6?<span className='timeBoxNegative'>-</span>:''}
            {timeBoxes.map((box)=>(
                <TimeInput
                    id={box.id}
                    placeHolder={box.placeholder}
                    cls={cls}
                    value={(displayCondition)?timeState[box.id]:timeArr[box.id]}
                />
            ))}

            
            {totalTime[key]?'':
            <Button
            variant="contained"
            color="primary"
            name='submitButton'
            className='saveTimeBtn'
            startIcon={<CheckIcon />}
            onClick={()=>submitTime()}
            >
                Save Time
            </Button>
            }

         </div>
    )
}

export default TimeCard
