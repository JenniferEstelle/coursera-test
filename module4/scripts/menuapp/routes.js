(function () {

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        //If no other URL matches, redirect page to...
        $urlRouterProvider.otherwise('/');

        //Setup UI States
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.template.html',
                controller: 'MenuCategoriesController as categoriesCtrl',
                resolve: {
                    categories1: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories()
                            .then(function (response) {
                                return response.data;
                            }).catch(function (error) {
                                console.log("MenuDataService not returning response.data")
                            })
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryShortName}',
                templateUrl: 'templates/items.template.html',
                controller: 'ListItemsByCategoryController as listItemsCtrl',
                params: { categoryShortName: null }, //<a ui-sref="items(categoryShortName: display.short_name)</a>"
                resolve: {
                    items1: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        console.log('Resolve worked');
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })
    }

})();