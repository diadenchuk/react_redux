import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

const loadAuthors = function (){
  return function (dispatch){
    dispatch(beginAjaxCall()); // to show the loader
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error =>{
      throw(error);
    });
  };
}


export {loadAuthors};
