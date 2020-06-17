import React from 'react';
import {shallow} from 'enzyme';
import Form from '../../components/form';

describe('<Form />', () => {
    it('can render button', () => {
        let app = shallow(<Form />);
        expect(app.find('button').text()).toBe('GO!');
    });
});