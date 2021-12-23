import {shallow,mount} from 'enzyme';
import React from 'react';
import TotalTargetTime from './TotalTargetTime.component'
import {Provider} from "react-redux";
import {createStore,combineReducers} from 'redux';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jest from 'jest-mock'
import {TotalTimeReducer} from '../../redux/totalTime/TotalTime.reducer'
import {TaskReducer} from '../../redux/task/Task.reducer'
//'./totalTime/TotalTime.reducer';
Enzyme.configure({ adapter: new Adapter() });

describe('test functions of totalTargetTime',()=>{
    let wrapper;
    let store;
    function createTestStore() {
         return createStore(
          combineReducers({
            TotalTimeReducer:TotalTimeReducer,
            TaskReducer:TaskReducer,
          })
        );
      }
    beforeEach(()=>{
        store=createTestStore();
        wrapper=mount(<Provider store = {store}>
                        <TotalTargetTime/>
                    </Provider>)
    })
    it('is a demo test',()=>{
        
    })
})