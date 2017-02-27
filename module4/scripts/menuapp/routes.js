// Create routes.js file and configure your routes and view states in it. These routes should be defined in the MenuApp module.
// Hint: don't try to define the states all at once. Define one state, including whatever it needs and make sure it works all the way to the point when you can see the results on the screen. Then, move on to the next view state. That does mean that you will have to leave routes.js and define all the other artifacts listed below and then come back to it, etc.
// Hint: The home state will not need a controller. Just a template.
// Hint: The categories state can have a controller as well as a resolve. The resolve will use the MenuDataService to retrieve categories and inject them into the controller. The controller can then expose the retrieved categories object such that it can be simply passed into the categories component.
// Hint: The items state can have the same type of setup as the categories state.


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
            params: { categoryShortName: null },  //<a ui-sref="items(categoryShortName: display.short_name)</a>"
            resolve: {
                items1: ['$stateParams', ' MenuDataService', function ($stateParams, MenuDataService) {
                    console.log('testing!');
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);  //returning a promise.  
                    
                    //REQUIREMENT:  BEFORE the call to the server, your code should APPEND the value of categoryShortName (pass in as an arg) into the getItemsForCategory method.
                }]
            }
        })


}