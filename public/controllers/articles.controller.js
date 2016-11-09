angular.module('articles',[])
.controller('ArticlesController', ['$scope', '$stateParams',
'$location', 'Authentication', 'Articles',   function($scope, $stateParams,
$location, Authentication, Articles){
  $scope.authentication = Authentication;
//$scope.article = article;

//client side to create and save article
  $scope.create = function(){
    var article = new Articles({
      category: this.category,
      title: this.title,
      content: this.content,
      author:this.author
    });
    article.$save(function(response){
      $location.path('myarticles');
    }, function(errorResponse){
      $scope.error = errorResponse.data.message;
    });
  };


//find all articles and list them
  $scope.find = function(){
    $scope.articles = Articles.query();
  };

//find specific article when viewing a specific article
  $scope.findOne = function(){
    $scope.article = Articles.get({
      articleId: $stateParams.articleId
    });
  };

  //client side updating an article
  $scope.update = function(){
    $scope.article.$update(function(){
      $location.path('myarticles');
    }, function(errorResponse) {
      $scope.error = errorResponse.data.message;
    });
  };

//client side delete an article
  $scope.delete = function(article){
    if(article){
      article.$remove(function(){
        for (var i in $scope.articles) {
          if ($scope.articles[i] === article){
            $scope.articles.splice(i, 1);
          }
        }
      });
    }else {
        $scope.article.$remove(function(){
          $location.path('myarticles');
        });
      }
  };


$scope.action = false;

}])
 //auto scroll to top of page when changing views
.run(function($rootScope,  $state, $anchorScroll){
    $rootScope.$on("$locationChangeSuccess", function(){
        $anchorScroll();
    });
  })
  //for back button to go back to previous view
  .run(['$window', '$rootScope',
function ($window ,  $rootScope) {
  $rootScope.goBack = function(){
    $window.history.back();
  }
}])
