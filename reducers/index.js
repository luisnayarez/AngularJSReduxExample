import { combineReducers } from 'redux';
import {SUBMIT_FORM, REQUEST_POSTS, RECEIVE_POSTS
} from '../constants/ActionTypes';

function posts(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_POSTS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.posts
    });
  case SUBMIT_FORM:
      return Object.assign({}, state, {
          isFetching: false,
          items: action.posts
      });
  default:
    return state;
  }
}

function setPosts(state = { }, action) {
  switch (action.type) {
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      [action.state]: posts(state[action.state], action)
    });
  case SUBMIT_FORM:
      console.log('SUBMIT_FORM ' + action.payLoad);
    return Object.assign({}, state, {
        [action.state]: posts(state[action.state], action),
        payload: action.payLoad
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  setPosts
});

export default rootReducer;
