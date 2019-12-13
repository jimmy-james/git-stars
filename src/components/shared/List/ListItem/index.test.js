import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

import { commit } from '../__mocks__/Commit';

describe('<ListItem/> ', () => {

    let wrapper = shallow(
        <ListItem
            author={commit.commit.committer.name}
            date={commit.commit.committer.date}
            message={commit.commit.message}
            url={commit.commit.url}
        />
    );

    test('should render ListItem element when commit data is passed', () => {
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.listItem').length).toBe(1);
        expect(wrapper.find('.listItemLeft').length).toBe(1);
        expect(wrapper.find('.listItemIcon').length).toBe(1);
        expect(wrapper.find('.listItemCenter').length).toBe(1);
        expect(wrapper.find('.listItemAuthor').length).toBe(1);
        expect(wrapper.find('.listItemMessage').length).toBe(1);
        expect(wrapper.find('.listItemRight').length).toBe(1);
    });

    test('should not render ListItem element when no commit data is passed', () => {
        wrapper = shallow(
            <ListItem />
        );
        expect(wrapper.find('.listItem').length).toBe(0);
        expect(wrapper.find('.listItem').length).toBe(0);
        expect(wrapper.find('.listItemLeft').length).toBe(0);
        expect(wrapper.find('.listItemIcon').length).toBe(0);
        expect(wrapper.find('.listItemCenter').length).toBe(0);
        expect(wrapper.find('.listItemAuthor').length).toBe(0);
        expect(wrapper.find('.listItemMessage').length).toBe(0);
        expect(wrapper.find('.listItemRight').length).toBe(0);
    });

    // TODO: test the timestampToMomentAgo() func
        // is there an image rendering from assets?
});
