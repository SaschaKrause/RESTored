angular.module("config.routes", []).constant('routesCfg', [
    {
    	state: 'profile',
      url: '/profile',
       views: {
        "content": { 
          templateUrl: 'partials/profile',
          controller: 'ProfileCtrl'
        }
      }
    }
  ]);



 