import NotesType from "./notes.type";

export const toggleNoteDisplay=()=>{
    return{
        type:NotesType.TOGGLE_NOTE_DISPLAY
    }
}

export const addNote=(noteText)=>{
    return{
        type:NotesType.ADD_NOTE,
        noteText:noteText,
    }
}

export const removeNote=(noteId)=>{
    return{
        type:NotesType.REMOVE_NOTE,
        noteId:noteId,
    }
}