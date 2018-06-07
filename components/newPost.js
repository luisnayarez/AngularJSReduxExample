export default function newPost() {
  return {
    restrict: 'E',
    controllerAs: 'newPost',
    controller: NewPostController,
    template: require('./newPost.html'),
    scope: {
      onSubmit: '='
    },
    bindToController: true
  };
}

class NewPostController {
}