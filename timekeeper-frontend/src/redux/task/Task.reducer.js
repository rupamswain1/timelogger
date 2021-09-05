import TaskType from './Task.type';

const INITIAL_STATUS={
    taskList:{},
    activeTask:null,
    notification:null,
    remainderLastUpdate:null,
}


export const TaskReducer=(state=INITIAL_STATUS,action)=>{
    switch(action.type){
        case TaskType.ADD_TASK:
            if(state.taskList[action.taskName]===undefined){
                let taskData={
                    time:0,
                    paused:true,
                    isCompleted:false,
                    color:'rgb(239, 68, 11)',
                    percentage:0,
                    type:'task',
                }
                state.taskList[action.taskName]=taskData;
            }
            return{
                ...state,
                taskList:{...state.taskList},
                
            }
        case TaskType.REMOVE_TASK:
            delete state.taskList[action.taskName];
            if(state.activeTask===action.taskName){
                state.activeTask=null;
            }
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
                notification:null
            }
        case TaskType.PAUSE_TASK:
            state.taskList[action.taskName].paused=true;
            state.activeTask=null;
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.START_TASK:
            for(var key in state.taskList){
                state.taskList[key].paused=true;
            }
            state.taskList[action.taskName].paused=false;
            if(action.seconds!==undefined && action.totalTime!==undefined && state.taskList[action.taskName].type!=='remainder'){

                state.taskList[action.taskName].time=parseInt(state.taskList[action.taskName].time)+parseInt(action.seconds);
                //console.log(action.totalTime);
                //console.log(state.taskList[action.taskName].time)
                
                state.taskList[action.taskName].percentage=(((state.taskList[action.taskName].time)/(parseInt(action.totalTime)))*parseInt(100)).toFixed(1);
            }
            state.activeTask=action.taskName;
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.COMPLETED_TASK:
            state.taskList[action.taskName].isCompleted=true;
            if(state.activeTask===action.taskName){
                state.activeTask=null;
            }
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.ADD_BREAK_TASK:
            for(var k in state.taskList){
                //console.log(key)
                if(k!==action.taskName){
                    state.taskList[k].paused=true;
                }
                //console.log(state.taskList[key].pasued)
            }
            if(action.taskName!=='releaseAll'){
                
                //console.log(state.taskList)
                if((state.taskList[action.taskName]===undefined)){
                let taskData={
                    time:0,
                    paused:false,
                    isCompleted:false,
                    color:action.color,
                    percentage:0,
                    type:'break',
                }
                state.taskList[action.taskName]=taskData;
                state.activeTask=action.taskName
                }
                else{

                    //console.log('********************************************************')
                    //console.log(state.taskList[action.taskName].paused)
                    if(!(state.taskList[action.taskName].paused)){
                        
                        state.taskList[action.taskName].paused=true;
                        state.activeTask=null
                    }
                    else{
                        
                        state.taskList[action.taskName].paused=false;
                        state.activeTask=action.taskName
                    }

                }

            }
            
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
            case TaskType.REMOVE_ALL_TASK:
                return{
                    ...state,
                    taskList:{},
                    activeTask:null,
                    notification:null
                }
            case TaskType.COMPLETE_ALL_TASK:
                for(var k1 in state.taskList){
                    state.taskList[k1].isCompleted=true;
                }
                //console.log(state.taskList[k1])
                return{
                    ...state,
                    activeTask:null,
                    taskList:{...state.taskList},
                    notification:null
                }
            case TaskType.ADD_REMAINDER:
                if(state.taskList[action.remainderName]===undefined){
                    let remainderData={
                        time:action.time-Math.floor(new Date()/1000),
                        isCompleted:false,
                        color:'rgb(6, 125, 38)',
                        percentage:100,
                        timeRemaining:action.time-Math.floor(new Date()/1000),
                        repeat:action.repeat,
                        type:'remainder',
                        
                    }
                    state.taskList[action.remainderName]=remainderData;
                }
                return{
                    ...state,
                    taskList:{...state.taskList},
                    
                }
            case TaskType.START_REMAINDER:
                state.notification=null;
                let timeDiff=0;
                if(state.remainderLastUpdate===null){
                    state.remainderLastUpdate=action.seconds;
                    timeDiff=1
                }
                else{
                    timeDiff=action.seconds-state.remainderLastUpdate;
                    state.remainderLastUpdate=action.seconds;
                }
                for(var key in state.taskList){
                       
                       if(state.taskList[key].type==='remainder' && state.taskList[key].isCompleted===false){
                            state.taskList[key].timeRemaining=parseInt(state.taskList[key].timeRemaining)-parseInt(timeDiff);
                            if(state.taskList[key].timeRemaining<=0 && state.taskList[key].repeat===false){
                                state.taskList[key].isCompleted=true;
                                state.notification=key;
                            }
                            else if(state.taskList[key].timeRemaining<=0 && state.taskList[key].repeat===true){
                                state.notification=key;
                                state.taskList[key].timeRemaining=state.taskList[key].time
                            }
                            state.taskList[key].percentage=(((state.taskList[key].timeRemaining)/(state.taskList[key].time))*parseInt(100)).toFixed(1);
                        }
                    
                }
                return{
                    ...state,
                    taskList:{...state.taskList},
                    notification: state.notification,
                    remainderLastUpdate:state.remainderLastUpdate
                }
        default:
            return state;
    }
}