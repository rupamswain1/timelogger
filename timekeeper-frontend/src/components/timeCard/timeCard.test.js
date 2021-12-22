import {shallow,mount} from 'enzyme';
import React from 'react';
import TimeCard from './timeCard.component';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jest from 'jest-mock'

Enzyme.configure({ adapter: new Adapter() });

describe('validate the timecard component when no time data is provided',()=>{
    const InitialProps={
        onChange:()=>{},
        onFocus:()=>{},
        onkeydown:()=>{},
        timeState:[],
        timeBoxes:[
            {
                id:0,
                placeholder:'H',
            },
            {
                id:1,
                placeholder:'H',
            },
            {
                id:2,
                placeholder:'M',
            },
            {
                id:3,
                placeholder:'M',
            },
            {
                id:4,
                placeholder:'S',
            },
            {
                id:5,
                placeholder:'S',
            },
        ],
        cls:'timeBox',
        displayCondition: false,
        timeArr:[],
        totalTime:[],
        key:null,
        submitTime:()=>{}
    }
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<TimeCard {...InitialProps}/>)
    })
    it('tests the count of time boxes',()=>{
        
        expect(wrapper.find('input')).toHaveLength(6)
    })
    it('tests the count of time lables',()=>{
       
        expect(wrapper.find('.timerText')).toHaveLength(3);
    })
    it('tests the display of submit button - it should be displayed',()=>{
        expect(wrapper.find('button')).toHaveLength(1);
    })
    it('tests the properties recieved by timeboxes',()=>{
        //console.log(wrapper.find('input').get(0).props); 
        expect.assertions(42)
        for(let i=0;i<6;i++){
            const inputElement=wrapper.find('input').get(i);
            expect(inputElement.props.className).toEqual(InitialProps.cls);
            expect(inputElement.props.type).toEqual('text');
            expect(inputElement.props.placeholder).toEqual(InitialProps.timeBoxes[i].placeholder);
            expect(inputElement.props.name).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.id).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.value).toEqual(undefined);
            if(i===0){
                expect(inputElement.props.disabled).toEqual(false);
            }
            else{
                expect(inputElement.props.disabled).toEqual(true);
            }
           // console.log(inputElement.props);
        }
    })
    it('test the negative value is not displayed',()=>{
       expect(wrapper.find('.timeBoxNegative').getElements()).toHaveLength(0);
    })
    it('will test the snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})

describe('validate the timecard component when time data is provided ime timeState',()=>{
    const InitialProps={
        onChange:()=>{},
        onFocus:()=>{},
        onkeydown:()=>{},
        timeState:[1,2,0,1,5,1],
        timeBoxes:[
            {
                id:0,
                placeholder:'H',
            },
            {
                id:1,
                placeholder:'H',
            },
            {
                id:2,
                placeholder:'M',
            },
            {
                id:3,
                placeholder:'M',
            },
            {
                id:4,
                placeholder:'S',
            },
            {
                id:5,
                placeholder:'S',
            },
        ],
        cls:'timeBox',
        displayCondition: true,
        timeArr:[],
        totalTime:[],
        key:null,
        submitTime:()=>{}
    }
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<TimeCard {...InitialProps}/>)
    })
    it('tests the count of time boxes',()=>{
        
        expect(wrapper.find('input')).toHaveLength(6)
    })
    it('tests the count of time lables',()=>{
       
        expect(wrapper.find('.timerText')).toHaveLength(3);
    })
    it('tests the display of submit button - it should be displayed',()=>{
        expect(wrapper.find('button')).toHaveLength(1);
    })
    it('tests the properties recieved by timeboxes',()=>{
        //console.log(wrapper.find('input').get(0).props); 
        expect.assertions(48)
        for(let i=0;i<6;i++){
            const inputElement=wrapper.find('input').get(i);
            expect(inputElement.props.className).toEqual(InitialProps.cls);
            expect(inputElement.props.type).toEqual('text');
            expect(inputElement.props.placeholder).toEqual(InitialProps.timeBoxes[i].placeholder);
            expect(inputElement.props.name).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.id).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.value).toEqual(InitialProps.timeState[i]);
            const undefinedTest=inputElement.props.value!==undefined;
            expect(undefinedTest).toEqual(true)
            if(i===0){
                expect(inputElement.props.disabled).toEqual(false);
            }
            else{
                expect(inputElement.props.disabled).toEqual(true);
            }
            //console.log(inputElement.props);
        }
    })
    it('test the negative - value is not displayed',()=>{
       expect(wrapper.find('.timeBoxNegative').getElements()).toHaveLength(0);
    })
    it('will test the snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})
describe('validate the timecard component when time data is provided in timeArr',()=>{
    const InitialProps={
        onChange:()=>{},
        onFocus:()=>{},
        onkeydown:()=>{},
        timeState:[],
        timeBoxes:[
            {
                id:0,
                placeholder:'H',
            },
            {
                id:1,
                placeholder:'H',
            },
            {
                id:2,
                placeholder:'M',
            },
            {
                id:3,
                placeholder:'M',
            },
            {
                id:4,
                placeholder:'S',
            },
            {
                id:5,
                placeholder:'S',
            },
        ],
        cls:'timeBox',
        displayCondition: false,
        timeArr:[1,2,0,1,5,1],
        totalTime:[],
        key:22122021,
        submitTime:()=>{}
    }
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<TimeCard {...InitialProps}/>)
    })
    it('tests the count of time boxes',()=>{
        
        expect(wrapper.find('input')).toHaveLength(6)
    })
    it('tests the count of time lables',()=>{
       
        expect(wrapper.find('.timerText')).toHaveLength(3);
    })
    it('tests the display of submit button - it should be displayed',()=>{
        expect(wrapper.find('button')).toHaveLength(1);
    })
    it('tests the properties recieved by timeboxes',()=>{
        //console.log(wrapper.find('input').get(0).props); 
        expect.assertions(48)
        for(let i=0;i<6;i++){
            const inputElement=wrapper.find('input').get(i);
            expect(inputElement.props.className).toEqual(InitialProps.cls);
            expect(inputElement.props.type).toEqual('text');
            expect(inputElement.props.placeholder).toEqual(InitialProps.timeBoxes[i].placeholder);
            expect(inputElement.props.name).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.id).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.value).toEqual(InitialProps.timeArr[i]);
            const undefinedTest=inputElement.props.value!==undefined;
            expect(undefinedTest).toEqual(true)
            if(i===0){
                expect(inputElement.props.disabled).toEqual(false);
            }
            else{
                expect(inputElement.props.disabled).toEqual(true);
            }
            //console.log(inputElement.props);
        }
    })
    it('test the negative - value is not displayed',()=>{
       expect(wrapper.find('.timeBoxNegative').getElements()).toHaveLength(0);
    })
    it('will test the snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})
describe('validate the timecard component when negative time data is provided in timeState',()=>{
    const InitialProps={
        onChange:()=>{},
        onFocus:()=>{},
        onkeydown:()=>{},
        timeState:[1,2,0,1,5,1,'-'],
        timeBoxes:[
            {
                id:0,
                placeholder:'H',
            },
            {
                id:1,
                placeholder:'H',
            },
            {
                id:2,
                placeholder:'M',
            },
            {
                id:3,
                placeholder:'M',
            },
            {
                id:4,
                placeholder:'S',
            },
            {
                id:5,
                placeholder:'S',
            },
        ],
        cls:'timeBox-negative',
        displayCondition: true,
        timeArr:[],
        totalTime:[],
        key:22122021,
        submitTime:()=>{}
    }
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<TimeCard {...InitialProps}/>)
    })
    it('tests the count of time boxes',()=>{
        
        expect(wrapper.find('input')).toHaveLength(6)
    })
    it('tests the count of time lables',()=>{
       
        expect(wrapper.find('.timerText')).toHaveLength(3);
    })
    it('tests the display of submit button - it should be displayed',()=>{
        expect(wrapper.find('button')).toHaveLength(1);
    })
    it('tests the properties recieved by timeboxes',()=>{
        //console.log(wrapper.find('input').get(0).props); 
        expect.assertions(48)
        for(let i=0;i<6;i++){
            const inputElement=wrapper.find('input').get(i);
            expect(inputElement.props.className).toEqual(InitialProps.cls);
            expect(inputElement.props.type).toEqual('text');
            expect(inputElement.props.placeholder).toEqual(InitialProps.timeBoxes[i].placeholder);
            expect(inputElement.props.name).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.id).toEqual(InitialProps.timeBoxes[i].id);
            expect(inputElement.props.value).toEqual(InitialProps.timeState[i]);
            const undefinedTest=inputElement.props.value!==undefined;
            expect(undefinedTest).toEqual(true)
            if(i===0){
                expect(inputElement.props.disabled).toEqual(false);
            }
            else{
                expect(inputElement.props.disabled).toEqual(true);
            }
            //console.log(inputElement.props);
        }
    })
    it('test the negative - value is not displayed',()=>{
       expect(wrapper.find('.timeBoxNegative').getElements()).toHaveLength(1);
    })
    it('will test the snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})
describe('it will test the Save time button',()=>{
    const InitialProps={
        onChange:()=>{},
        onFocus:()=>{},
        onkeydown:()=>{},
        timeState:[1,2,0,1,5,1,'-'],
        timeBoxes:[
            {
                id:0,
                placeholder:'H',
            },
            {
                id:1,
                placeholder:'H',
            },
            {
                id:2,
                placeholder:'M',
            },
            {
                id:3,
                placeholder:'M',
            },
            {
                id:4,
                placeholder:'S',
            },
            {
                id:5,
                placeholder:'S',
            },
        ],
        cls:'timeBox-negative',
        displayCondition: true,
        timeArr:[],
        totalTime:{0:true},
        timeKey:0,
        submitTime:()=>{}
    }
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<TimeCard {...InitialProps}/>)
    })
    it('tests the display of submit button - it should be displayed',()=>{
        expect(wrapper.find('button')).toHaveLength(0);
    })
})

describe('it will test the functions of component',()=>{
    const changeEvent={target:{value:4}}
     
    let wrapper;
    let InitialProps;
    beforeEach(()=>{
        InitialProps={
            onChange:jest.fn(),
            onFocus:jest.fn(),
            onkeydown:jest.fn(),
            timeState:[1,2,0,1,5,1,'-'],
            timeBoxes:[
                {
                    id:0,
                    placeholder:'H',
                },
                {
                    id:1,
                    placeholder:'H',
                },
                {
                    id:2,
                    placeholder:'M',
                },
                {
                    id:3,
                    placeholder:'M',
                },
                {
                    id:4,
                    placeholder:'S',
                },
                {
                    id:5,
                    placeholder:'S',
                },
            ],
            cls:'timeBox-negative',
            displayCondition: true,
            timeArr:[],
            totalTime:{1:true},
            timeKey:0,
            submitTime:jest.fn()
        }
        wrapper=shallow(<TimeCard {...InitialProps}/>)
    })

    it('will simulate a change event',()=>{
        //console.log(wrapper);
        //console.log(wrapper.find('TimeInput[id=0]').props());
        wrapper.find('TimeInput[id=0]').simulate('click');
        wrapper.find('.timcardsContainer').simulate('change',changeEvent);
        
        expect(InitialProps.onChange).toHaveBeenCalledWith(changeEvent)
        wrapper.find('.timcardsContainer').simulate('focus');
        expect(InitialProps.onFocus).toHaveBeenCalledTimes(1);
        wrapper.find('.timcardsContainer').simulate('keydown',{keycode:8});
        expect(InitialProps.onFocus).toHaveBeenCalledTimes(1);
        wrapper.find('.saveTimeBtn').simulate('click');
        expect(InitialProps.submitTime).toHaveBeenCalledTimes(1);
    })
})