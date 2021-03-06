angular.module('myBlog', [])
.controller('MainCtrl', [
  '$scope',

function($scope){
  $scope.test = 'Hello World:';

  $scope.posts = [
    {title: 'post 1', upvotes: 3},
    {title: 'post 2', upvotes: 6},
    {title: 'post 3', upvotes: 12},
    {title: 'post 4', upvotes: 4},
    {title: 'post 5', upvotes: 7}
  ];

  $scope.addPost = function(){
    $scope.posts.push({title: 'A new post!', upvotes: 0});
    $scope.title = '';
  };

  if(!$scope.title || $scope.title === '') { return; }

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

}]);
