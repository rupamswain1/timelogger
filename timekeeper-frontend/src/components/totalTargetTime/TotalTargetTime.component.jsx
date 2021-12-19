import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import {saveTotalTime,updateCountDown} from '../../redux/totalTime/TotalTime.action';
import {ArrayToSeconds,SecondsToArray} from '../../logic/arrayToSeconds';
import './TotalTargetTime.scss' 
const TotalTargetTime=()=>{
    const dispatch=useDispatch();
    const {key,totalTime}=useSelector(state=>state.TotalTimeReducer);
    const {taskList}=useSelector(state=>state.TaskReducer);
    const [timeState,setTimeState]=useState([]);
    //console.log(timeState)
    let timeArr=[]
    //console.log(timeArr)
    useEffect(() => {
        validatePrevValue();
        const interval = setInterval(() => {
            //console.log('countDownRunning')
            if(timeState.length>0){
               dispatch(updateCountDown());
                validatePrevValue();
                setTimeState(timeArr)
                
            }
            //console.log(timeState)
        }, 1000);
        return () => clearInterval(interval);
      }, [timeState.length]);
    //console.log(timeArr)
    const validatePrevValue=()=>{
        if((totalTime[key]!==undefined)&&(totalTime[key][getFullDate()]!==undefined)){
            timeArr=SecondsToArray(totalTime[key][getFullDate()]);
            setTimeState(timeArr)
        }
       
    }
    const handleChange=event=>{
            validatePrevValue();
            //timeArr.push(event.target.value)
            if(!isNaN(event.target.value)){
            timeArr[parseInt(event.target.name)]=event.target.value
                if(parseInt(event.target.name)<5){
                    document.getElementById(parseInt(event.target.name)+1).disabled=false;
                    document.getElementById(parseInt(event.target.name)+1).focus();
                    document.getElementById(parseInt(event.target.name)+1).value='';
                    if(parseInt(event.target.name)!==0){
                    document.getElementById(parseInt(event.target.name)).disabled=true;
                    }
                }
                else{
                    document.getElementById(parseInt(event.target.name)).blur();
                    document.getElementById(parseInt(event.target.name)).disabled=true;
                }
            }
            else{document.getElementById(parseInt(event.target.name)).value='';}
            //console.log(timeArr)
           //console.log((parseInt(timeArr[0])*10+(parseInt(timeArr[1])))*60*60)    
    }
    const clearTxt=event=>{
        if(!event.target.name==='submitButton')
        document.getElementById(parseInt(event.target.name)).value='';
    }
    const getFullDate=()=>{
        let newDate=new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            return(date.toString()+month.toString()+year.toString());
    }
    const submitTime=()=>{
        if(timeArr.length){
            setTimeState(timeArr)
            const totalSeconds=ArrayToSeconds(timeArr);
            //console.log(totalSeconds)
            dispatch(saveTotalTime(totalSeconds))
        }
        else{
            console.log("time is blank");
        }
           
        //newTime=totalTime[key][getFullDate()];
        //console.log(newTime)
    }
    let cls='timeBox';
    if(timeState.length>6){
        cls='timeBox-negative'
    }
    let displayCondition=false;
    if(timeState.length>0 && Object.keys(taskList).length>0){
        displayCondition=true;
    }
    const handleDelete=(event)=>{
        const pressedKey=event.key;
        if (pressedKey==='Backspace' || pressedKey==='Delete'){
            timeArr.pop();
            //console.log(event.target.name);
                if(parseInt(event.target.name)<=5){
                    if(parseInt(event.target.name)<1){
                        return false
                    }
                    document.getElementById(parseInt(event.target.name)-1).disabled=false;
                    document.getElementById(parseInt(event.target.name)-1).focus();
                    document.getElementById(parseInt(event.target.name)-1).value='';
                    
                }

                // else{
                //     document.getElementById(parseInt(event.target.name)).blur();
                //     document.getElementById(parseInt(event.target.name)).disabled=true;
                //}
        }
    }
    return(
        <div className='timcardsContainer' onChange={handleChange} onFocus={clearTxt} onKeyDown={handleDelete}>
            {timeState.length>6?<span className='timeBoxNegative'>-</span>:''}
            
            <input className={cls} placeholder='H' type='text' name='0'  id='0' value={(displayCondition)?timeState[0]:timeArr[0]} maxlength='1'>
            </input>
            <input disabled className={cls} placeholder='H' type='text' name='1' id='1' value={displayCondition?timeState[1]:timeArr[1]} maxlength='1'>
            </input>
            <div className='timerText'>H</div>
            <input disabled className={cls} placeholder='M' type='text' name='2' id='2' value={displayCondition?timeState[2]:timeArr[2]} maxlength='1'>
            </input>
            <input disabled className={cls} placeholder='M' type='text' name='3' id='3' value={displayCondition?timeState[3]:timeArr[3]} maxlength='1'>
            </input>
                <div className='timerText'>M</div>
                <input disabled className={cls} placeholder='S' type='text' name='4' id='4' value={displayCondition?timeState[4]:timeArr[4]} maxlength='1'>
            </input>
            <input disabled className={cls} placeholder='S' type='text' name='5' id='5' onfocus='this.value=""' value={displayCondition?timeState[5]:timeArr[5]} maxlength='1'>
            </input>
                <div className='timerText'>S</div>
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

export default TotalTargetTime;