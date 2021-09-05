import SubmitDataType from './SubmitData.type';

export const submitDataStart=()=>{
    return{
        type:SubmitDataType.SUBMIT_ALL_DATA_START
    }
}

export const submitDataInProgerss=(taskReducer,breakButtonReducer,totalTimeReducer)=>{
    return{
        type:SubmitDataType.SUBMIT_ALL_DATA_INPROGRESS,
        breakButtonReducer:breakButtonReducer,
        taskReducer:taskReducer,
        totalTimeReducer:totalTimeReducer
    }
}