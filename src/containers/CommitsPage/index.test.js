import React from 'react';
import { shallow } from 'enzyme';
import CommitsPage from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

import { match } from './__mocks__/Match';

describe('<CommitsPage/> ', () => {

    const wrapper = shallow(
        <CommitsPage match={match} />
    );

    test('should render List element', () => {
        expect(wrapper.length).toBe(1)
    });
});
