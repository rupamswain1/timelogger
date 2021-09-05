import TotalTimeType from './TotalTime.type';


export const saveTotalTime=(timeInSec)=>{
    return({
        type: TotalTimeType.SAVE_TOTAL_TIME,
        payload: timeInSec
        })
}

export const startCountDown=(seconds)=>{
    return{
        type:TotalTimeType.START_COUNTDOWN,
        seconds:seconds,
    }
}

export const pauseCountDown=()=>{
    return{
        type:TotalTimeType.PAUSE_COUNTDOWN,
    }
}

export const setCountDownTrue=()=>{
    return {
        type:TotalTimeType.SET_COUNTDOWN_TRUE,
    }
}

export const updateCountDown=()=>{
    return{
        type:TotalTimeType.UPDATE_COUNTDOWN
    }
}

export const removeAllTime=()=>{
    return{
        type:TotalTimeType.REMOVE_ALL_TIME,
    }
}

export const updateLastRunSec=(seconds)=>{
    return{
        type:TotalTimeType.UPDATE_LAST_RUN_TIME,
        seconds:seconds,
    }
}