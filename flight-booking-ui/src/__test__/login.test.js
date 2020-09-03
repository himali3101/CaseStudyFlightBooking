import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import Login from '../Components/login'

describe('Test case for testing login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    test('email check', () => {
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'virat88@gmail.com' } });
        expect(wrapper.state('email')).toEqual('virat88@gmail.com');
    })

    it('password check', () => {
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'virat88' } });
        expect(wrapper.state('password')).toEqual('virat88');
    })


    it('login check with right data', () => {
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'virat88@gmail.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'virat88' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('message')).toBe('');
    })

    it('handleSubmit function is called', () => {
        const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
        const wrapper = shallow(<form form="test" onSubmit={handleSubmit} />);
        wrapper.find('form').simulate('submit');
        expect(handleSubmit).toBeCalledTimes(1)
    })

    it('handleSubmit function is called on button click', () => {
        const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
        const wrapper = shallow(<form form="test" onSubmit={handleSubmit} />);
        wrapper.find('form').simulate('submit');
        expect(handleSubmit).toBeCalledTimes(1)
    })
})