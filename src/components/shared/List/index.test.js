import React from 'react';
import { shallow } from 'enzyme';
import List from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

import { commits } from './__mocks__/CommitsPage';

describe('<List/> ', () => {

    let wrapper = shallow(
        <List commits={commits} />
    );

    test('should render List element when commits are passed', () => {
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.listContainer').length).toBe(1);
    });

    test('should not render List element when no commits are passed', () => {
        wrapper = shallow(
            <List commits={null} />
        );
        expect(wrapper.find('.listContainer').length).toBe(0);
    });
});
