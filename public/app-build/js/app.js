(function () {
  "use strict";

  var mainApp = angular.module('myApp', [
      // libs
      'ui.router',

      // config
      'config.routes',

      // controller
      'controller.main',
      'controller.profile',

      // service
      'service.rest'
  ]);


  mainApp.config(['$stateProvider', '$urlRouterProvider', 'routesCfg', function ($stateProvider, $urlRouterProvider, routesCfg) {

    // iterate over the routes (configured as constants in config/routes-cfg.js)
    _.forEach(routesCfg, function (route) {
      $stateProvider.
          state(route.state, {
            url: route.url,
            templateUrl: route.templateUrl,
            controller: route.controller, 
            views : route.views
          });
    });
    
    $urlRouterProvider.otherwise("/init"); 

  }]);


angular.module('controller.main', []).controller('MainCtrl', ["$scope", 'RestService', function ($scope, RestService) {
  "use strict";

  $scope.message = "Hello World.";
  $scope.dings = RestService.answer;
}]);


angular.module('controller.profile', []).controller('ProfileCtrl', ["$scope", function ($scope) {
  "use strict";

  $scope.message = "The profile view.";
}]);
