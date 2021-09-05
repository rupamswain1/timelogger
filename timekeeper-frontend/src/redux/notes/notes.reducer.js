import NotesType from "./notes.type";

const INITIAL_STATE={
    noteKey:0,
    notes:{},
    noteDisplay:false,
}
export const NoteReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case NotesType.TOGGLE_NOTE_DISPLAY:
            return{
                ...state,
                noteDisplay:!(state.noteDisplay)
            }
        case NotesType.ADD_NOTE:
            state.notes[state.noteKey]=action.noteText
            return{
                ...state,
                noteKey:state.noteKey+1,
                notes:{...state.notes}
            }
        case NotesType.REMOVE_NOTE:
            delete state.notes[action.noteId]
            return{
                ...state,
                notes:{...state.notes}
            }
        default:
            return state;

    }
}