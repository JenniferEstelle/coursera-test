(function () {
    'use strict'

    angular.module('data') 
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')


    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;


        service.getAllCategories = function () {
            var categoriesPromise = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')

            }).then(function (response) {
                console.log("getAllCategories.js working")
                return response;
            }).catch(function (error) {
                console.log("Something went terribly wrong w/ getAllCategories.");
            });
            return categoriesPromise;
        };


        service.getItemsForCategory = function (categoryShortName) {
            console.log('Cat name: ' + categoryShortName)
            var itemsPromise = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName),

            }).then(function (response) {
                console.log('getItemsForCategory is working. See response.data.menu_items:  ', response.data.menu_items);
                return response.data.menu_items;
            }).catch(function (error) {
                console.log("Something went terribly wrong w/ getItemsForCategory.");
            });
            return itemsPromise;
        }
    }
})();