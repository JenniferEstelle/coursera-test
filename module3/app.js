(function () {
    'use strict'

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        var searchTerm = "";

        //we are returning a promise.
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {     //function success(response)
            narrowCtrl.menu = response.data;
            console.log("response.data: ", response.data);
            console.log(narrowCtrl.menu.menu_items[0].description);
        })
            .catch(function (error) {  //function error (response)
                console.log("Something went terribly wrong.");
            });
    };

    MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
    function MenuSearchService($q, $http, ApiBasePath) {
        var service = this;

        //this function below returns a promise (see above)
        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            })
            return response;   
        }
    }

})();

/*.then(function (result) {
                var foundItems = "";
                if (result.toLowerCase().indexOf(searchTerm) === -1) {
                    console.log("match");
                } else {
                    console.log("no match");
                }

                return foundItems;
            )}*/


        //service.getMatchedMenuItems = function(searchTerm) {
        /*var promise = search
 
        
        var searchTermLc = searchTerm.toLowerCase();
        //5:30
        if (result.indexOf('searchTermLc') === -1) {
            deferred.resolve(result);
        } else {
            result.message = "Your search found no results."
            deferred.reject(result);
        }
        return deferred.promise;*/

        //reach out to the server (API) using $http service and
        //retrieve list of all the menu items
        //loop through each menu items
        //pick out the ones whose description matches the searchTerm ($filter)
        //return that list (wrapped in a promise)
        //then the function (method) itself will return a promise
        /*return $http({
            //method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
            //params: {param1: 'value1'}
            
        }).then(function(result) {
            function success(response) {
                //do something with response.data
            },
            function error(response) {
                //do something with error response
            });
 
            process result and only keep items that matches
            var foundItems...
 
            return foundItems;
 
        */