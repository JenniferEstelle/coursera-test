(function () {
    'use strict'

    angular.module('data') //retrieve module
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;
        var categoryResponse = [];
        service.getAllCategories = function () {
            console.log("getAllCategories");
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            }).then(function (response) {
                categoryResponse.push(response.data);
                console.log("categories: ", categoryResponse);
                return response.data;
            }).catch(function (error) {
                console.log("getAllCategories request failed.");
            });
            console.log(categoryResponse);
            return categoryResponse;

        };

        //REQUIREMENT:  BEFORE the call to the server, your code should APPEND the value of categoryShortName (pass in as an arg) into the getItemsForCategory method.
        /* service.getItemsForCategory(categoryShortName) = function (categoryShortName) {  //where should the parameter get passed through?
             var response = $http({
                 method: 'GET',
                 url: (ApiBasePath + '/categories.json?category=')
             }).then(function (response) {
                 return response;
             }).catch(function (error) {  //function error (response)
                 console.log("Something went terribly wrong.");
             });
             return response;
         }*/
    }
})();