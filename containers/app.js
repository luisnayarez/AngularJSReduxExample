export default function app() {
  return {
    restrict: 'E',
    controllerAs: 'app',
    controller: AppController,
    template: require('./app.html'),
    scope: {}
  };
}

class AppController {

  constructor($ngRedux, AsyncActions, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, AsyncActions)((currentState, actions) => {
      Object.assign(this, currentState, actions);
    });

    this.handleSubmit = this.handleSubmit.bind(this);

    this.fetchPosts();

    $scope.$on('$destroy', unsubscribe);
  }

  handleSubmit(currentState) {
    console.log('handleSubmit... ' + currentState);
    this.addPost(currentState);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    const { currentState, setPosts } = state;
    const {
      isFetching,
      items: posts
    } = setPosts[currentState] || {
      isFetching: true,
      items: []
    };

    return {
      posts,
      isFetching
    };
  }
}
