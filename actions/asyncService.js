import * as types from '../constants/ActionTypes';

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
      return $http.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(json => dispatch(receivePosts(json)));
    };
  }

    function addPost() {
        return dispatch => {
            dispatch(submitForm());
            return $http.post('https://jsonplaceholder.typicode.com/posts',{userId: "999999",title: "testTiempo",body: "bodybodybody"})
                .then(response => response.data);
        };
    }


  return {
      addPost,
      fetchPosts
  };
}
