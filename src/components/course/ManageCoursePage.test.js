import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {saveCourse:() => {return Promise.resolve();}},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).to.equal('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).to.equal('Title must be at least 5 characters.');

  });
});
