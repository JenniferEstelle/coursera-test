(function () {
    'use strict'

    angular.module('data') //retrieve module
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;
       
        service.getAllCategories = function () {
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            }).then(function (response) {
                console.log("getAllCategories.js working")
                 return response;
             }).catch(function (error) {  //function error (response)
                 console.log("Something went terribly wrong w/ getAllCategories.");
             });
             return response;

        };

        //REQUIREMENT:  BEFORE the call to the server, your code should APPEND the value of categoryShortName (pass in as an arg) into the getItemsForCategory method.
         service.getItemsForCategory = function (categoryShortName) {  
             console.log("testing!")
             var response = $http({
                 method: 'GET',
                 url: (ApiBasePath + '/categories.json?category=' + categoryShortName),
                 
             }).then(function (response) {
                 console.log('response.data.menu_items:  getItemsForCategory is working:', response.data.menu_items);
                 return response.data.menu_items;
             }).catch(function (error) {  
                 console.log("Something went terribly wrong w/ getItemsForCategory.");
             });
             return response;
         }
    }
})();