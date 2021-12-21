import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import {saveTotalTime,updateCountDown} from '../../redux/totalTime/TotalTime.action';
import {ArrayToSeconds,SecondsToArray} from '../../logic/arrayToSeconds';
import TimeCard from '../timeCard/timeCard.component';
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
    const timeBoxes=[
        {
            id:0,
            placeholder:'H',
        },
        {
            id:1,
            placeholder:'H',
        },
        {
            id:2,
            placeholder:'M',
        },
        {
            id:3,
            placeholder:'M',
        },
        {
            id:4,
            placeholder:'S',
        },
        {
            id:5,
            placeholder:'S',
        },
    ]
    return(
        <TimeCard onChange={handleChange} onFocus={clearTxt} onKeyDown={handleDelete} timeState={timeState} timeBoxes={timeBoxes} cls={cls} displayCondition={displayCondition} timeArr={timeArr} totalTime={totalTime} key={key} submitTime={submitTime}/>
        // <div className='timcardsContainer' onChange={handleChange} onFocus={clearTxt} onKeyDown={handleDelete}>
        //     {timeState.length>6?<span className='timeBoxNegative'>-</span>:''}
        //     {timeBoxes.map((box)=>(
        //         <TimeInput
        //             id={box.id}
        //             placeHolder={box.placeholder}
        //             cls={cls}
        //             value={(displayCondition)?timeState[box.id]:timeArr[box.id]}
        //         />
        //     ))}

            
        //     {totalTime[key]?'':
        //     <Button
        //     variant="contained"
        //     color="primary"
        //     name='submitButton'
        //     className='saveTimeBtn'
        //     startIcon={<CheckIcon />}
        //     onClick={()=>submitTime()}
        //     >
        //         Save Time
        //     </Button>
        //     }

        // </div>

    )
}

export default TotalTargetTime;