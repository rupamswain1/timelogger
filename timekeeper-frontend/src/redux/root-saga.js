import {all,call} from 'redux-saga/effects';
import {startBreakSaga} from './breakButton/BreakButton.sagas';
import {startTask,pauseTask,completeTask,removeTask} from './task/Task.saga';
import {startTaskTime} from './totalTime/TotalTime.sagas';
import {startSubmit} from './submitData/SubmitData.saga';

export function* rootSaga(){
    yield all([call(startBreakSaga),
        call(startTask),
        call(pauseTask),
        call(completeTask),
        call(removeTask),
        call(startTaskTime),
        call(startSubmit)    
    ]);
}