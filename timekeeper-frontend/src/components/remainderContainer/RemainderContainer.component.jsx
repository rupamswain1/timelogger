import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './RemainderContainer.style.scss'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import AddedTask from '../addedTask/AddedTask.component';
import {addTask,addRemainder} from '../../redux/task/Task.action';
import {SecondsToArray} from '../../logic/arrayToSeconds';
import {GetTimeInSeconds} from '../../logic/getDate';
import DateFnsUtils from '@date-io/date-fns';
import {GetDate} from '../../logic/getDate';


import {
  MuiPickersUtilsProvider,
  TimePicker
} from '@material-ui/pickers';
import Checkbox from'@material-ui/core/Checkbox';
const RemainderContainer=()=>{

    const {taskList}=useSelector(state=>state.TaskReducer);
    const {key,totalTime}=useSelector(state=>state.TotalTimeReducer);
    const [remainderName,setRemainderName]=useState();
    const [time,setTime]=useState();
    const [repeat,setRepeat]=useState(false);
    const dispatch=useDispatch();
    //console.log(taskList)
    
    const dispatchAddRemainder=()=>{
        dispatch(addRemainder(remainderName,time,repeat));
        setRemainderName('');
        setTime(undefined);
        setRepeat(false)
        document.getElementById('outlined-basic').blur();
    }
    let timeError=undefined; 
    const timeValidation=dateTime=>{
        setTime(Math.floor(new Date(dateTime).getTime()/1000))
        //console.log(((time-GetTimeInSeconds())/60))
        if(time!==undefined){
            if(((time-GetTimeInSeconds())/60)<0){
                timeError=true;
                setTime(undefined)
            }
        }

    }   
    //console.log((time-GetTimeInSeconds())/60)
    return(
        <React.Fragment>
        {totalTime[key]!==undefined && totalTime[key][GetDate()]?
        <div className='remainderMainContainer'>
            <span className='headingremainder'>Remainder List</span>
            <div className='addRemainderinpputContainer'>
                <div className='addRemainderContainer'>
                    <div className='remainderAddInputs'>
                        <input value={remainderName} onChange={e=>setRemainderName(e.target.value)} className='addRemainderText' id="outlined-basic" placeholder="Add Remainder" variant="outlined" color='primary' type='text'></input>
                        <MuiPickersUtilsProvider  utils={DateFnsUtils}>

                        <TimePicker
                          
                          className='timeSelector'
                          value={time!==undefined?new Date(time*1000):new Date()}
                          onChange={timeValidation}
                          ampm={false}
                        />
                        
                         </MuiPickersUtilsProvider>
                        
                        </div>
                    <div className='minutesFromNowContainer'>
                        <Checkbox
                        inputProps={{ 'aria-label': 'Checkbox Repeat' }}
                        style={{'color':'white'}}
                        color="primary"
                        className='repeatSelectCheckBox'
                        onChange={e=>setRepeat(e.target.checked)}
                        checked={repeat}
                        />
                        <span className='minutesFromNow'> {`Repeat Every ${time!==undefined?((time-GetTimeInSeconds())/60).toFixed(1):0} Minutes From Now`}</span>
                        <Button
                        variant="contained"
                        color="primary"
                        className='saveRemainderBtn'
                        startIcon={<CheckIcon />}
                        onClick={dispatchAddRemainder}
                        disabled={time===undefined}
                        ></Button>
                    </div>
                    {(time-GetTimeInSeconds())<0?
                        <span className='timeError'>Please select a future time</span>
                        :
                        ''
                    }
                    
                    
                </div>
            </div>
            <div className='addedRemainderListContainer'>

                {Object.keys(taskList).map((key)=>
                    {   return(
                        taskList[key].type==='remainder'?
                        (<AddedTask key={key} type={taskList[key].type} completed={taskList[key].isCompleted} bgColor={taskList[key].color} taskName={key} paused={taskList[key].paused} percentage={taskList[key].percentage} time={SecondsToArray(taskList[key].timeRemaining)}/>)
                        :''
                        )
                    }    
                    )
                }          
            </div>

        </div>
        :''}
        </React.Fragment>
    )
}
export default RemainderContainer;