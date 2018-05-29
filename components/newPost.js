export default function newPost() {
  return {
    restrict: 'E',
    controllerAs: 'newPost',
    controller: NewPostController,
    template: require('./newPost.html'),
    scope: {
      onSubmit: '=',
      title: '=',
      body: '='
    },
    bindToController: true
  };
}

class NewPostController {
}