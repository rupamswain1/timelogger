import {shallow,mount} from 'enzyme';
import React from 'react';
import TotalTargetTime from './TotalTargetTime.component'
import {Provider} from "react-redux";
import {createStore,combineReducers} from 'redux';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jest from 'jest-mock'

Enzyme.configure({ adapter: new Adapter() });

describe('test functions of totalTargetTime',()=>{
    let wrapper;
    let store;
    function createTestStore() {
        const store = createStore(
          combineReducers({
            user: userReducer,
            config: configReducer,
          })
        );
        return store;
      }
    beforeEach(()=>{
        store=createTestStore();
        wrapper=mount(<Provider store = {store}>
                        <TotalTargetTime/>
                    </Provider>)
    })
    it('is a demo test',()=>{
        console.log(wrapper.child().dive());
    })
})