angular.module('myBlog', [])
.controller('MainCtrl', [
  '$scope',
function($scope){
  $scope.test = 'Hello World:';
}]);
