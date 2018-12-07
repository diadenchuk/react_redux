import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setUp(saving) {
  let props = {
    course: {}, saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setUp();
    expect(output.type).to.be.equal('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).to.be.equal('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const {output} = setUp(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).to.be.equal('Save');
  });

  it('save button is labeled "Saving..." when not saving', () => {
    const {output} = setUp(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).to.be.equal('Saving...');
  });
});
