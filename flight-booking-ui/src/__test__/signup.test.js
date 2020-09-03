import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme'
import App from '../App'

import { Signup } from '../Components/signup'

test("renders without crashing", () => {
    const wrapper = shallow(
        <App />
    );
    expect(wrapper).toMatchSnapshot();
})

describe('<Signup />', () => {
    it('contains h4', () => {
        const wrapper = mount(<Profile user={user} />)
        const value = wrapper.find('h4').text()
        expect(value).toEqual('John Doe')
    })
    it('accepts user props', () => {
        const wrapper = mount(<Profile user={user} />);
        expect(wrapper.props().user).toEqual(user)
    })
})
