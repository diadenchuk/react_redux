import {expect} from 'chai';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setUp(saving) {
  let props = {
    course: {}, saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

it('renders form and h1', () => {
  const wrapper = setUp();
  expect(wrapper.find('form').length).to.equal(1);
  expect(wrapper.find('h1').text()).to.equal('For testing');
});

it('save button is labeled "Save" when not saving', () => {
  const wrapper = setUp(false);
  expect(wrapper.find('input').props().value).to.equal('Save');
});

it('save button is labeled "Saving..." when not saving', () => {
  const wrapper = setUp(true);
  expect(wrapper.find('input').props().value).to.equal('Saving...');
});
