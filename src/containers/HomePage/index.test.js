import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

describe('<HomePage/> ', () => {

  const wrapper = shallow(
    <HomePage />
  );

  test('should render home page element', () => {
    expect(wrapper.find('.homePageContainer').length).toBe(1);
    expect(wrapper.find('.cardWrapper').length).toBe(1);
  });

});
