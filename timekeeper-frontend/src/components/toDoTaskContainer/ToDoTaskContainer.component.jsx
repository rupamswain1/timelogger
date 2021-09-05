import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ToDoTaskContainer.style.scss'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import AddedTask from '../addedTask/AddedTask.component';
import {addTask} from '../../redux/task/Task.action';
import {SecondsToArray} from '../../logic/arrayToSeconds'
import {GetDate} from '../../logic/getDate';
const ToDoTaskContainer=()=>{

    const {taskList}=useSelector(state=>state.TaskReducer);
    const {key,totalTime}=useSelector(state=>state.TotalTimeReducer);
    const dispatch=useDispatch();
    const[taskName,setTaskName]=useState();
    //console.log(taskList)
    const setTask=(event)=>{
        setTaskName(event.target.value);
    }
    const dispatchAddTask=()=>{
        if(taskName){
            dispatch(addTask(taskName));
            setTaskName('');
            document.getElementById('outlined-basic').blur();
        }
        
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatchAddTask();
    }
  
    return(
        <React.Fragment>
        {totalTime[key]!==undefined && totalTime[key][GetDate()]?
        <div className='toDoMainContainer'>
            <span className='headingToDo'>Task List</span>
            <div className='addTaskinpputContainer'>
                <form onSubmit={handleSubmit} className='addTaskContainer'>
                    
                    <input value={taskName} onChange={setTask} className='addTaskText' id="outlined-basic" placeholder="Add Task" variant="outlined" color='primary'></input>
                   
                    <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={`saveTaskBtn-${taskName?'enabled':'disabled'}`}
                    startIcon={<CheckIcon />}                    
                    ></Button>
                    
                    <hr></hr>
                </form>
            </div>
            <div className='addedTaskListContainer'>

                {Object.keys(taskList).map((key)=>
                    {   return(
                        taskList[key].isCompleted?'':taskList[key].type==='remainder'?'':
                        (<AddedTask key={key} type={taskList[key].type} completed={taskList[key].isCompleted} bgColor={taskList[key].color} taskName={key} paused={taskList[key].paused} percentage={taskList[key].percentage} time={SecondsToArray(taskList[key].time)}/>)
                        )
                    }    
                    )
                }          
            </div>

        </div>
        :''}
        </React.Fragment>
    )
}
export default ToDoTaskContainer;