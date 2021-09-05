import TotalTimeType from './TotalTime.type';
import {takeEvery,put,select} from 'redux-saga/effects';
import {startTask,startRemainder} from '../task/Task.action';
import {startCountDown,updateLastRunSec} from '../totalTime/TotalTime.action';
import {GetDate,GetTimeInSeconds} from '../../logic/getDate';
import {submitDataStart} from '../submitData/SubmitData.action'
import {notify} from '../../components/remainderNotification/RemainderNotification.component'
function* updateCountDown(){
    var d = new Date(); // for now
    var hr=d.getHours(); // => 9
    var min=d.getMinutes(); // =>  30
    var sec=d.getSeconds(); 
    const {key,countDownProgress,originalTime,lastUpdatedTime}=yield select(state=>state.TotalTimeReducer)
    const taskReducer=yield select(state=>state.TaskReducer)
    //console.log(taskReducer)
    //If the time is 23:59:58, it will save all task. as we are using the key to identify time ofter 00:00:00 key will change, hence breaking the function
    if(parseInt(hr)===23 && parseInt(min)===59 && parseInt(sec)===58){
        window.alert('The day is about to end, and a new day will begin, We will Save your progress so far');
        yield put(submitDataStart())
        setTimeout(function(){
            
    
        }, 500); 
        window.location.reload(false);
    }
    else{
    let originalTimeLocal=originalTime[key][GetDate()];
    let seconds=GetTimeInSeconds();
    yield put(startRemainder(seconds))
    if(taskReducer.notification!==null){
        notify(taskReducer.notification)
    }
    //updates the time of main timer as well as the tasks
    if(countDownProgress){
        if(lastUpdatedTime===null){
            //console.log('in saga')
            yield put(updateLastRunSec(seconds))
            yield put(startCountDown(1))
            
            yield put(startTask(taskReducer.activeTask,1,originalTimeLocal))
        }
        else{
            let timeDiff=seconds-lastUpdatedTime;
            
            yield put(updateLastRunSec(seconds))
            yield put(startCountDown(timeDiff))
            yield put(startTask(taskReducer.activeTask,timeDiff,originalTimeLocal))
        }
       
    }
    }
}

export function* startTaskTime(){
    yield takeEvery(TotalTimeType.UPDATE_COUNTDOWN, updateCountDown)
}