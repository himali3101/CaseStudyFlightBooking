import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import SignUp from '../Components/signup'

describe('<Signup />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SignUp />);
    });

    it('should have a `<form>` element', () => {
        expect(
            wrapper.find('form').length
        ).toBe(1);
    });


})
