import React from 'react';
import {shallow} from 'enzyme';

import Footer from '../../components/footer'

describe('<Footer />', () => {
    it('can render footer', () => {
        let app = shallow(<Footer />);
        expect(app.find('span').text()).toBe('2020 DeltaV');
    });
});