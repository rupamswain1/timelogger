import {useState,useEffect, useCallback,useMemo} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {saveTotalTime,updateCountDown} from '../redux/totalTime/TotalTime.action'
import {ArrayToSeconds,SecondsToArray} from '../logic/arrayToSeconds';


const getFullDate=()=>{
    let newDate=new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return(date.toString()+month.toString()+year.toString());
}
export const useTimerHooks=()=>{
    const dispatch=useDispatch();
    const {key,totalTime,countDownProgress}=useSelector(state=>state.TotalTimeReducer);
    const {taskList}=useSelector(state=>state.TaskReducer);
    const [timeState,setTimeState]=useState([]);

    let timeArr=[]
  
    useEffect(() => {
        validatePrevValue();
        
        const interval = setInterval(() => {
            if(timeState.length>0){
               dispatch(updateCountDown());
                validatePrevValue();
                setTimeState(timeArr)
                
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [...timeState,countDownProgress]);

    const validatePrevValue=()=>{
        
        if((totalTime[key]!==undefined)&&(totalTime[key][getFullDate()]!==undefined)){
            timeArr=SecondsToArray(totalTime[key][getFullDate()]);
            setTimeState(timeArr)
        }
       
    }
    const handleChange=useCallback((event)=>{
            
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

    },[])
    
    const clearTxt=useCallback((event)=>{   
        if(event.target.name!=='submitButton'){
            document.getElementById(parseInt(event.target.name)).value='';
        }
    },[])

   
    const submitTime=useCallback(()=>{
        if(timeArr.length>=6){
            setTimeState(timeArr)
            const totalSeconds=ArrayToSeconds(timeArr);
            //console.log(totalSeconds)
            dispatch(saveTotalTime(totalSeconds))
        }
        else{
            console.log("time is blank");
        }
    },[])

 
    const cls=useMemo(()=>{
        return timeState.length>6?'timeBox-negative':'timeBox'
    },[timeState.length>6])
   
    const displayCondition=()=>{
        return (timeState.length>0 && Object.keys(taskList).length>0)?'true':'false'
    }
    
    const handleDelete=useCallback((event)=>{
        const pressedKey=event.key;
        if (pressedKey==='Backspace' || pressedKey==='Delete'){
            timeArr.pop();
            
                if(parseInt(event.target.name)<=5){
                    if(parseInt(event.target.name)<1){
                        return false
                    }
                    document.getElementById(parseInt(event.target.name)-1).disabled=false;
                    document.getElementById(parseInt(event.target.name)-1).focus();
                    document.getElementById(parseInt(event.target.name)-1).value='';
                }
        }
    },[])

    const timeBoxes=useMemo(()=>{ return [
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
    ]},[])

    return [handleChange,clearTxt,handleDelete,timeState,timeBoxes,cls,displayCondition,timeArr,totalTime,key,submitTime]
}