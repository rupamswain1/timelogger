import TaskType from './Task.type';
import {takeEvery,put,select} from 'redux-saga/effects';
//import {startBreak} from '../breakButton/BreakButton.action'
//import {startTask} from '../task/Task.action';
import {setCountDownTrue,pauseCountDown} from '../totalTime/TotalTime.action'

function* startTaskEffects({type,taskName,seconds}){

    yield put(setCountDownTrue());
    //yield put(startBreak('releaseAll'))
}

function* pauseTaskEffects({type,taskName}){

    yield put(pauseCountDown());
}

function* completeTaskEffects({type,taskName}){
    const taskReducer=yield select(state=>state.TaskReducer)
    //console.log(taskReducer.activeTask)
    if(taskReducer.activeTask===null){
        yield put(pauseCountDown());
    }
    
}

export function* startTask(){
    yield takeEvery(TaskType.START_TASK, startTaskEffects)
    
}
export function* pauseTask(){
    yield takeEvery(TaskType.PAUSE_TASK, pauseTaskEffects)
}

export function* completeTask(){
    yield takeEvery(TaskType.COMPLETED_TASK,completeTaskEffects)
}

export function* removeTask(){
    yield takeEvery(TaskType.REMOVE_TASK,completeTaskEffects)
}