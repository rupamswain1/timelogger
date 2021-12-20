import {mount} from 'enzyme';
import React from 'react';
import TimeInput from './timeInput.component';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

it('expect to render the Time input component which is not disabled',()=>{
    expect(mount(<TimeInput id='0'/>)).toMatchSnapshot();
})
it('expect to render the Time input component which is disabled',()=>{
    expect(mount(<TimeInput id='1'/>)).toMatchSnapshot();
})