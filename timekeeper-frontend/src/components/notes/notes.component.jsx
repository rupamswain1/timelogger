import React from 'react';
import { useDispatch } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import { removeNote } from '../../redux/notes/notes.action';
import './notes.style.scss'
const Notes=({noteMsg,noteKey})=>{
    const dispatch=useDispatch();

    return(
        <div className='notesContainer'>
            <div className='notesText'>{noteMsg}</div>
            <div className='removeButton'>
                <CancelIcon onClick={()=>dispatch(removeNote(noteKey))}/>
            </div>
        </div>

    )
}

export default Notes;