import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../components/header';

describe('<Header />', () => {
    it('can render header', () => {
        let app = shallow(<Header />);
        expect(app.find('h1').text()).toBe('RESTy')
    })
})