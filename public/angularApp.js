
//main angular file to include depenedencies and such.
var mainApp = angular.module('mainApp', ['ngResource','ui.router','articles', 'ngAnimate']);

mainApp.config(['$locationProvider', function($locationProvider){
  $locationProvider.hashPrefix('!');
}]);
if(window.location.hash === '#_=_') window.location.hash = '#!';
angular.element(document).ready(function(){
  angular.bootstrap(document, ['mainApp']);
});
