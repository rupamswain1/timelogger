import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import BreakButtons from '../../components/breakButtons/BreakButtons.component';
import ToDoTaskContainer from '../../components/toDoTaskContainer/ToDoTaskContainer.component'
import CompletedTaskListContainer from '../../components/completedTaskListContainer/CompletedTaskListContainer.component';
import RemainderContainer from '../../components/remainderContainer/RemainderContainer.component'
import FinishDayButton from '../../components/finishDayButton/FinishDayButton.component'
import NotesContainer from '../../components/notesContainer/NotesContainer.component'

import DoughnutChart from '../../doughnutChart/DoughnutChart.component'
import TimeComparisonBarChart from '../../components/timeComparisonBarChart/timeComparisonBarChart';
import TimeTrackerLineChart from '../../components/timeTrackLineChart/TimeTrackLineChart.component'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {removeAllTask} from '../../redux/task/Task.action';
import {removeAllTime} from '../../redux/totalTime/TotalTime.action';
import {toggleNoteDisplay} from '../../redux/notes/notes.action';
import {clearSubmittedData} from '../../redux/submitData/SubmitData.action';
import Header from '../../components/header/Header.component'
import ClearAllButton from '../../components/clearAllButton/ClearAllButton.component';

import './HomePage.style.scss'
const HomePage=()=>{
    
    const dispatch=useDispatch();
    const reset=()=>{
        dispatch(removeAllTask());
        dispatch(removeAllTime());
        setTimeout(function(){
            window.location.reload(false);
    
        }, 500);
    }
    const clearAllAction=(event)=>{
        if(event.target.innerHTML=='Confirm'){
            dispatch(clearSubmittedData())
        }
    }
    return(

        <div className='mainContainerHomePage'>
             <Header/>
            <div className='restoreReducer'>
                <IconButton aria-label="reset"  color="primary" onClick={reset}><RotateLeftIcon/></IconButton>    
            
            </div>
            <div className='openNotes'>
                <Fab color="primary" aria-label="add" onClick={()=>dispatch(toggleNoteDisplay())}>
                     <AddIcon />
                </Fab>
                <NotesContainer className='notesContainerMainHome'/>
            </div>
            <div className='totalTimeContainer'>
                <TotalTargetTime/>
            </div>
            
            <React.Fragment>
                <div className='switchButtonsContainer'>
                    <BreakButtons/>
                </div>
                <div className='taskListContainer'>
                
                    <ToDoTaskContainer className='toDoListMain'/> 
                    <RemainderContainer clasName='remainderMain'/>
                    <CompletedTaskListContainer className='completedTaskListMain'/>
                </div>
            
                <div className='reportButtonContainer'>
                   <FinishDayButton/>
                </div>
            </React.Fragment>
            
            
            <div className='graphsContainer'>
               
                <div className='chartConatiner1'> 
                    <DoughnutChart/>1
                    <TimeComparisonBarChart/>
                </div>
                <div className='chartContainer2'>
                    <TimeTrackerLineChart/>
                </div>
                
            </div>
            <div className='clearButtonContainer' onClick={clearAllAction}>
                <ClearAllButton/>
            </div>
        </div>
    )
}

export default HomePage
//countDownProgress?'':