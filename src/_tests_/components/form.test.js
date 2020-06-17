import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from '../../components/form';

describe('<Form />', () => {
    it('can render button', () => {
        let app = shallow(<Form />);
        expect(app.find('button').text()).toBe('GO!');
    });

    it('search box initially empty', () => {
        let app = mount(<Form />);
        expect(app.state('url')).toBe('');
    });

    it('search box changes url state', () => {
        let app = mount(<Form />);
        let input = app.find('input');
        input.simulate('change', { target: { value: 'abc' } });
        expect(app.state('url')).toBe('abc');
    });

    
});