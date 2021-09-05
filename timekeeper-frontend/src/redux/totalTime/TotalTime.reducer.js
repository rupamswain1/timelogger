import TotalTimeType from './TotalTime.type';
import {GetDate} from '../../logic/getDate';
const INITIAL_STATE={
    key:0,
    totalTime:{},
    originalTime:{},
    countDownProgress:false,
    lastUpdatedTime:null,
}

export const TotalTimeReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case TotalTimeType.SAVE_TOTAL_TIME:
            state.key=Object.keys(state.totalTime).length;
            
            let fullDate=GetDate()
            state.totalTime[state.key]={[fullDate]:action.payload}
            state.originalTime[state.key]={[fullDate]:action.payload}
            return{
                ...state,
                key:state.key,
                totalTime:{...state.totalTime},
                originalTime:{...state.originalTime},
            }
        case TotalTimeType.START_COUNTDOWN:
            
            let dateTime=GetDate();
            state.totalTime[state.key][dateTime]=state.totalTime[state.key][dateTime]-parseInt(action.seconds);
            return{
                ...state,
                totalTime:{...state.totalTime},
                countDownProgress:true,
            }
        case TotalTimeType.UPDATE_LAST_RUN_TIME:
            return{
                ...state,
                lastUpdatedTime:action.seconds,
            }
        case TotalTimeType.PAUSE_COUNTDOWN:
            state.countDownProgress=false;
            return{
                ...state,
                countDownProgress:false,
                lastUpdatedTime:null,
            }
        case TotalTimeType.SET_COUNTDOWN_TRUE:
            return{
                ...state,
                countDownProgress:true,
            }
        case TotalTimeType.UPDATE_COUNTDOWN:
            return state;
        case TotalTimeType.REMOVE_ALL_TIME:
            return{
                key:0,
                totalTime:{},
                originalTime:{},
                countDownProgress:false,
                lastUpdatedTime:null,
            }
        default:
            return state;
    }
}