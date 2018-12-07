import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    //const newCourse = {title: 'C'};
    const course = {id: 'B', title: 'New Title'};
    const action = courseActions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // assert
    expect(newState.length).toEqual(3);
    // expect(newState[0].title).toEqual('A');
    // expect(newState[1].title).toEqual('B');
    // expect(newState[2].title).toEqual('C');
    expect(updateCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
  });
});
