import {mount,render} from 'enzyme';
import React from 'react';
import TimeInput from './timeInput.component';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Snapshot Tests of Time Input',()=>{
    it('expect to render the Time input component which is not disabled',()=>{
        const wrapper=render(<TimeInput id='0' value='5' cls='timeBox' placeHolder='M'/>)
        expect(wrapper).toMatchSnapshot();
    })
    it('expect to render the Time input component which is disabled',()=>{
        expect(render(<TimeInput id='1'  value='5' cls='timeBox' placeHolder='M'/>)).toMatchSnapshot();
    })
    it('expect to render the Side text for odd box index',()=>{
        expect(render(<TimeInput id='1'  value='5' cls='timeBox' placeHolder='M'/>)).toMatchSnapshot();
    })
    
    it('expect the class to render correctly for negative value',()=>{
        expect(render(<TimeInput id='1' value='-1' cls='timeBox-negative'/>)).toMatchSnapshot();
    })
    it('expect the class to render correctly for positive value',()=>{
        expect(render(<TimeInput id='1' value='1' placeHolder='S'/>)).toMatchSnapshot(); 
    })
})

describe('Attribute and Values test of Time Input',()=>{
    
    it('expect all the attributes are populated correctly for the first element',()=>{
        const data={id:"0", value:'5',placeHolder:'H',cls:'timeBox'}
        const wrapper=mount(<TimeInput id={data.id} value={data.value} placeHolder={data.placeHolder} cls={data.cls}/>);
        const inputElement=wrapper.find('input').props();
        expect.assertions(8)
        expect(inputElement.type).toEqual('text');
        expect(inputElement.className).toEqual(data.cls);
        expect(inputElement.placeholder).toEqual(data.placeHolder);
        expect(inputElement.name).toEqual(data.id);
        expect(inputElement.id).toEqual(data.id);
        expect(inputElement.value).toEqual(data.value);
        expect(inputElement.disabled).toEqual(true);
        expect(wrapper.html()).toEqual('<input class="timeBox" placeholder="H" type="text" name="0" id="0" maxlength="1" disabled="" value="5">')
    })
    it('tests the label is populated for odd timeboxes',()=>{
        const data={id:"1", value:'5',placeHolder:'H',cls:'timeBox'}
        const wrapper=mount(<TimeInput id={data.id} value={data.value} placeHolder={data.placeHolder} cls={data.cls}/>);
        const labelElement=wrapper.find('div').props();
        expect.assertions(3);
        expect(labelElement.className).toEqual('timerText');
        expect(wrapper.text()).toEqual(data.placeHolder);
        expect(wrapper.find('div').html()).toEqual('<div class="timerText">H</div>');
    })

})

