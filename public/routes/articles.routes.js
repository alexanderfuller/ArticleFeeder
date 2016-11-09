
//client side routing
angular.module('articles')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider ) {
   $stateProvider
   .state('home', {
       url: '/home',
       templateUrl: 'views/home.html'

      })
      .state('articlesCreate',{
        url: '/articles/create',
        templateUrl: '/views/create-article.html',
         controller:'ArticlesController'


      })
       .state('articlesId',{
         url:'/articles/:articleId',
         templateUrl:'/views/view-article.html',
          controller:'ArticlesController'

     })
    .state('articlesEdit',{
      url:'/articles/:articleId/edit',
      templateUrl: '/views/edit-article.html',
       controller:'ArticlesController'
       })
    .state('myArticles',{
      url:'/myarticles',
      templateUrl:'/views/my-articles.html',
       controller:'ArticlesController'
    })
    .state('politicArticles',{
      url:'/politicarticles',
      templateUrl:'/views/politic-articles.html',
       controller:'ArticlesController'
    })
    .state('techArticles',{
      url:'/techarticles',
      templateUrl:'/views/tech-articles.html',
       controller:'ArticlesController'
    })
    .state('enterArticles',{
      url:'/enterarticles',
      templateUrl:'/views/entertainment-articles.html',
       controller:'ArticlesController'
    })
    .state('sportArticles',{
      url:'/sportarticles',
      templateUrl:'/views/sport-articles.html',
       controller:'ArticlesController'
    })

    .state('userRegister', {
      url:'/userregister',
      templateUrl:'/views/user-register.html'

    })
$urlRouterProvider.otherwise('/home');

       }]);
