(function () {
    'use strict';

    angular.module('admin')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('admin', {
                absract: true, //aka: you can never go directly to this state. It's more like a "parent" state, but you can't go here. 
                templateUrl: 'src/admin/admin.html'
            })
            .state('admin.home', {
                url: '/',
                templateUrl: 'src/admin/home/home.html'
            })
            .state('admin.userlogin', {
                url: '/login',
                templateUrl: 'src/admin/user/login.html',
                controller: 'UserLoginController',
                controllerAs: 'userLoginCtrl',
            })

    }
})();

/*    .state('admin.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/admin/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })*/