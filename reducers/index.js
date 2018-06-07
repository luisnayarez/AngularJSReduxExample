import { combineReducers } from 'redux';
import { SUBMIT_FORM, REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionTypes';

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
  default:
    return state;
  }
}

function setPosts(state = {
  items: []
}, action) {
  switch (action.type) {
  case SUBMIT_FORM:
    console.log('SUBMIT_FORM', action);
    return Object.assign({}, state, {
      items: [...state.items, action.payload] // ES6
      // o también puede ser
      // items: [].concat(state.items, action.payload)
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  setPosts,
  posts
});

export default rootReducer;
