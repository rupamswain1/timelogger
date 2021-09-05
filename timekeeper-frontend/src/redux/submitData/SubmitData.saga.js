import SubmitDataType from './SubmitData.type';
import {takeEvery,put,select} from 'redux-saga/effects';
import {startBreak} from '../breakButton/BreakButton.action'
import {submitDataInProgerss} from '../submitData/SubmitData.action'
import {removeAllTask,completeAll} from '../task/Task.action';
import {removeAllTime} from '../totalTime/TotalTime.action';
function* startSubmitProcess(){

    //console.log(1)
    yield put(startBreak('releaseAll'));
    //console.log(2)
    yield put(completeAll())
    const taskReducer=yield select(state=>state.TaskReducer.taskList)
    const breakButtonReducer=yield select(state=>state.BreakButtonReducer)
    const totalTimeReducer=yield select(state=>state.TotalTimeReducer)
    yield put(submitDataInProgerss(taskReducer,breakButtonReducer,totalTimeReducer))
    yield put(removeAllTask());
    yield put(removeAllTime());
}


export function* startSubmit(){
    yield takeEvery(SubmitDataType.SUBMIT_ALL_DATA_START, startSubmitProcess);
}