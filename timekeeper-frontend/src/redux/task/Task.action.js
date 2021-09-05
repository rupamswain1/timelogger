import TaskType from './Task.type';

export const addTask=(taskName)=>{
    return{
        type:TaskType.ADD_TASK,
        taskName:taskName
    }
}

export const removeTask=(taskName)=>{
    return{
        type:TaskType.REMOVE_TASK,
        taskName:taskName
    }
}

export const pauseTask=(taskName)=>{
    return{
        type:TaskType.PAUSE_TASK,
        taskName:taskName
    }
}

export const startTask=(taskName,seconds,originalTimeLocal)=>{
    return{
        type:TaskType.START_TASK,
        taskName:taskName,
        seconds:seconds,
        totalTime:originalTimeLocal
    }
}

export const completeTask=(taskName)=>{
    return{
        type:TaskType.COMPLETED_TASK,
        taskName:taskName
    }
}

export const addBreaktask=(taskName,color)=>{
    return{
        type:TaskType.ADD_BREAK_TASK,
        taskName:taskName,
        color:color,
    }
}

export const removeAllTask=()=>{
    return{
        type:TaskType.REMOVE_ALL_TASK,
    }
}

export const completeAll=()=>{
    return{
        type:TaskType.COMPLETE_ALL_TASK,
    }
}


export const addRemainder=(remainderName,timeInSec,repeat)=>{
    return{
        type:TaskType.ADD_REMAINDER,
        remainderName:remainderName,
        time:timeInSec,
        repeat:repeat,
    }
}


export const startRemainder=(seconds)=>{
    return{
        type:TaskType.START_REMAINDER,
        seconds:seconds,
    }
}

