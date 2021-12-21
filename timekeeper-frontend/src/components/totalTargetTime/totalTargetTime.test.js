import {mount,render} from 'enzyme';
import React from 'react';
import TotalTargetTime from './TotalTargetTime.component';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

it('is a demo',()=>{
    const wrapper=mount(<TotalTargetTime/>);
    console.log(wrapper.html());
})