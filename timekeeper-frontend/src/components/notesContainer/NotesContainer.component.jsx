import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Notes from '../notes/notes.component';
import { addNote } from '../../redux/notes/notes.action';
import './NotesContainer.style.scss';

const NotesContainer=()=>{
    const dispatch=useDispatch();
    const {noteDisplay,notes} =useSelector(state=>state.NoteReducer)
    const[noteEntered,setNoteEntered]=useState('');
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(noteEntered.length>0){
        dispatch(addNote(noteEntered));
        setNoteEntered('');
        }
    }
    return(
        noteDisplay?
        <div className='notesContanerMain'>
            <form onSubmit={handleSubmit} className='notesInput'>
                <input value={noteEntered} type='text' placeholder='Add Note' className='noteInputs' onChange={e=>setNoteEntered(e.target.value)}></input>
                <button className={`addNoteBtn-${noteEntered.length>0?'enabled':'disabled'}`} type="submit" disabled={noteEntered.length<=0}>Add</button>
            </form>
            <div className='notesCollection'>
                {Object.keys(notes).map((key)=>
                    {   return(
                        <Notes noteMsg={notes[key]} noteKey={key}/>
                        )
                    }    
                    )
                }          
               
               
            </div>
        </div>
        :''
    )
}

export default NotesContainer;