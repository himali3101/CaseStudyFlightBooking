import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme'
import App from '../App'

import { Signup } from '../Components/signup'

describe('<Signup />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Signup />);
    });
    it('should have a `<form>` element', () => {
        expect(
            wrapper.find('form').length
        ).toBe(1);
    });
    it('`<form>` element should have a onSubmit attribute', () => {
        expect(
            wrapper.props().onSubmit
        ).toBeDefined();
    });

})
