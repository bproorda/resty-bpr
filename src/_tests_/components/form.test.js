import React from 'react';
import {shallow, mount} from 'enzyme';

import Form from '../../components/form/'

describe('<Form />', () => {
    it('can render button', ()=> {
        let app = shallow('<Form />');
        expect(app.find('button')).ToBeTruthy
    });
}) ;