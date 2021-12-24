import React,{useState,useEffect} from 'react';
import {useTimerHooks} from '../../customHooks/useTimerHooks'
import TimeCard from '../timeCard/timeCard.component';
import './TotalTargetTime.scss' 


const TotalTargetTime=()=>{
    const [handleChange,clearTxt,handleDelete,timeState,timeBoxes,cls,displayCondition,timeArr,totalTime,key,submitTime] = useTimerHooks();
    return(
        <TimeCard 
            onChange={handleChange} 
            onFocus={clearTxt} 
            onKeyDown={handleDelete} 
            timeState={timeState} 
            timeBoxes={timeBoxes} 
            cls={cls} 
            displayCondition={displayCondition} 
            timeArr={timeArr} 
            totalTime={totalTime} 
            timeKey={key} 
            submitTime={submitTime}/>
    )
}

export default TotalTargetTime;