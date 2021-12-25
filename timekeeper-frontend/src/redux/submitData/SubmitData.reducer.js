import SubmitDataType from './SubmitData.type';
import {GetDate} from '../../logic/getDate';
const INITIAL_STATE={
        key:0,
        data:{}        
    };

export const SubmitDataReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SubmitDataType.SUBMIT_ALL_DATA_START:
           
            return{
                ...state,
            }
        case SubmitDataType.SUBMIT_ALL_DATA_INPROGRESS:
            state.key=Object.keys(state.data).length;
            let date=GetDate();
            let taskData=action.taskReducer;
            for(var key in taskData){
               if(taskData[key].type==='remainder'){
                   delete taskData[key];
               }
            }
            let breakButtonData=action.breakButtonReducer;
            let totalTimeData=action.totalTimeReducer;
            
            state.data[state.key]={
                date:date,
                taskData:taskData,
                breakButtonData:breakButtonData,
                totalTimeData:totalTimeData
            }
            return{
                ...state,
                key:state.key,
                data:{...state.data}
            }
        case SubmitDataType.Delete_ALL_DATA:
            {console.log('dispatched');
            return {...INITIAL_STATE};}
        default:
            return state;
    }
}