import BreakButtonType from './BreakButton.type';

const INITIAL_STATE={
    instagram:{isActive:false,time:0,color:'rgb(243, 9, 192)'},
    faceBook:{isActive:false,time:0,color:'rgb(10, 79, 158)'},
    youtube:{isActive:false,time:0,color:'rgb(192, 9, 9)'},
    call:{isActive:false,time:0,color:'rgb(109, 75, 204)'},
    messaging:{isActive:false,time:0,color:'rgb(43, 192, 43)'},
    sleep:{isActive:false,time:0,color:'rgb(36, 109, 128)'},
    excercise:{isActive:false,time:0,color:'rgb(13, 121, 94)'},
    tea:{isActive:false,time:0,color:'rgb(102, 50, 7)'},
    food:{isActive:false,time:0,color:'rgb(48, 197, 185)'},
    releaseAll:{isActive:true,time:0,color:'rgb(48, 1, 1)'},
    miscelaneous:{isActive:false,time:0,color:'rgb(115, 20, 223)'},
    currentActive:'releaseAll',
    
}


export const BreakButtonReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        
        case BreakButtonType.START_BREAK:
            let prevActive='';
            let btnName=action.breakName;
            //console.log(btnName)
            if(action.breakName!=='releaseAll'){
                
                state[state.currentActive].isActive=false;
                state[action.breakName].isActive=true;
                state.currentActive=action.breakName;
                prevActive=state.currentActive;
            }
            else{
                
                state[state.currentActive].isActive=false;
                state.currentActive=action.breakName;
                prevActive=state.currentActive;
            }
            return{
                ...state,
                [btnName]:{...state[btnName]},
                [prevActive]:{...state[prevActive]}
            }
        case BreakButtonType.PAUSE_BREAK:
            state[state.currentActive].isActive=false;
            return{
                ...state,
                [action.breakName]:{...state[action.breakName]},
            }
        case BreakButtonType.GET_BREAK_COLOR:
            let color=state[action.breakName].color;
            //console.log(color)
            //console.log(state[action.breakName])
            return color;
        default:
            return state;
    }
}

