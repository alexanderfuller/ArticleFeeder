angular.module('articles')
.factory('Articles', ['$resource', '$http',
function($resource, $http){
  return $resource('api/articles/:articleId', {
    articleId: '@_id'
  }, {
    update: {
      method:'PUT'
    }
  });
}])
.factory('Authentication', [
  function(){
    this.user = window.user;

    return {
      user: this.user
    };
  }
]);
