(function () {
    'use strict'

//how do I do this declaration.
    angular.module('data', [])
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')



    MenuSearchService.$inject = []; //DO I NEED THIS?
    function MenuDataService() {
        var service = this;

        service.getAllCategories = function () {
            console.log("getAllCategories");
             var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            }).then(function (response) {
                return response;
            })
        };

        //REQUIREMENT:  BEFORE the call to the server, your code should APPEND the value of categoryShortName (pass in as an arg) into the getItemsForCategory method.
        service.getItemsForCategory(categoryShortName) = function (categoryShortName) {  //where should the parameter get passed through?
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json?category=')
            }).then(function (response) {
                return response;
            }).catch(function (error) {  //function error (response)
                console.log("Something went terribly wrong.");
            });
            return response;
        }

    }
})();