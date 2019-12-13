import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

import { repo } from './__mocks__/Repo';

describe('<Card/> ', () => {

    let wrapper = shallow(
        <Card
            owner={repo.owner.login}
            name={repo.name}
            imgUrl={repo.owner.avatar_url}
            stars={repo.stargazers_count}
        />
    );

    test('should render Card element when data is passed', () => {
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.cardContainer').length).toBe(1);
    });
    
    test('should not render Card element when no data is passed', () => {
        wrapper = shallow(
            <Card />
        );
        expect(wrapper.find('.cardContainer').length).toBe(0);
    });
});
