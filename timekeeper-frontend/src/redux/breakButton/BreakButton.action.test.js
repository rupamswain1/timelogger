import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import BreakButtonType from './BreakButton.type';
import {startBreak,pauseBreak} from './BreakButton.action';
Enzyme.configure({ adapter: new Adapter() });

describe('it will test the actions',()=>{
    it('will test the start break action',()=>{
        expect(startBreak('abc')).toEqual({type:BreakButtonType.START_BREAK,breakName:'abc'})
    })
    it('will test the pause break action',()=>{
        expect(pauseBreak('abc')).toEqual({type:BreakButtonType.PAUSE_BREAK,breakName:'abc'})
    })
})