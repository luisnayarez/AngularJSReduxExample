import * as types from '../constants/ActionTypes';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function submitForm(postObj) {
    console.log('submitForm: ' + postObj);
  return {
    type: types.SUBMIT_FORM,
      payload: postObj
  };
}

function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  };
}

function receivePosts(json) {
  return {
    type: types.RECEIVE_POSTS,
    posts: json
  };
}

export default function asyncService($http) {
  function fetchPosts() {
    return dispatch => {
      dispatch(requestPosts());
      return $http.get(API_URL)
        .then(response => response.data)
        .then(json => dispatch(receivePosts(json)));
    };
  }

    function addPost() {
      var testData = {userId: "999999",title: "testTiempo",body: "bodybodybody"};
        return dispatch => {
            dispatch(submitForm());
            return $http.post(API_URL,testData)
                .then(response => response.data)
                .then(dispatch(fetchPosts()));
        };
    }


  return {
      addPost,
      fetchPosts
  };
}
