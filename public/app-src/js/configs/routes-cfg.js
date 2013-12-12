angular.module("config.routes", []).constant('routesCfg', [
    {
    	state: 'app.profile',
      url: '/profile',
       views: {
        "content": { 
          templateUrl: 'partials/profile',
          controller: 'ProfileCtrl'
        }
      }
    }
  ]);



 