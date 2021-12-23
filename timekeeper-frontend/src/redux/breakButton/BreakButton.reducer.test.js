import {shallow,mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jest from 'jest-mock'

import BreakButtonType from './BreakButton.type';
import {BreakButtonReducer} from './BreakButton.reducer';
Enzyme.configure({ adapter: new Adapter() });

describe('it will test the break button reducer',()=>{
    const Mock_state={
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
    
    it('will test start break, if the break name is not releaseAll',()=>{
        const result=BreakButtonReducer(Mock_state,{type:BreakButtonType.START_BREAK,breakName:'instagram'})
        expect(result.instagram.isActive).toEqual(true);
        expect(result.currentActive).toEqual('instagram');
    })
    it('will if the break name is releaseAll',()=>{
        const result=BreakButtonReducer(Mock_state,{type:BreakButtonType.START_BREAK,breakName:'releaseAll'})
        expect(result.instagram.isActive).toEqual(false);
        expect(result.currentActive).toEqual('releaseAll');
    })
    it('will test the continuation of action after selecting break and then release',()=>{
        const result=BreakButtonReducer(Mock_state,{type:BreakButtonType.START_BREAK,breakName:'instagram'})
        expect(result.instagram.isActive).toEqual(true);
        expect(result.currentActive).toEqual('instagram');
        const releaseAllResult=BreakButtonReducer(result,{type:BreakButtonType.START_BREAK,breakName:'releaseAll'})
        expect(releaseAllResult.instagram.isActive).toEqual(false);
        expect(releaseAllResult.currentActive).toEqual('releaseAll');
    })
    it('will test pause break functionality',()=>{
        const result=BreakButtonReducer(Mock_state,{type:BreakButtonType.START_BREAK,breakName:'instagram'})
        const pausedState=BreakButtonReducer(result,{type:BreakButtonType.PAUSE_BREAK,breakName:'instagram'})
        expect(pausedState.instagram.isActive).toEqual(false);
        expect(pausedState.currentActive).toEqual('instagram');
    })
    it('will test the start button function after it is paused',()=>{
        const result=BreakButtonReducer(Mock_state,{type:BreakButtonType.START_BREAK,breakName:'instagram'})
        const pausedState=BreakButtonReducer(result,{type:BreakButtonType.PAUSE_BREAK,breakName:'instagram'})
        expect(pausedState.instagram.isActive).toEqual(false);
        expect(pausedState.currentActive).toEqual('instagram');
        const startState=BreakButtonReducer(pausedState,{type:BreakButtonType.START_BREAK,breakName:'instagram'})
        expect(startState.instagram.isActive).toEqual(true);
        expect(startState.currentActive).toEqual('instagram');
    })
    it('will test the return of default state',()=>{
        const result=BreakButtonReducer(Mock_state,{type:'unkown state',breakName:'instagram'})
        expect(result).toEqual(Mock_state)
    })
})