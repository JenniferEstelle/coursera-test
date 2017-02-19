(function () {
    'use strict'

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            scope: {
                foundArray: '<',
                name: '@name',
                onRemove: '&',
                myFound: '&found'  //attempt
            },
            controller: NarrowItDownController,
            controllerAs: 'listCtrl',
            bindToController: true,
            templateURL: 'foundItems.html'
        };
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var listCtrl = this;
        var searchTerm = '';

        listCtrl.found = [];

        //attempt below
       /* listCtrl.response = function (arg1) {
            listCtrl.found = "Hi " + arg1;
        }*/
         listCtrl.response = function (searchTerm) {
             MenuSearchService.getMatchedMenuItems(searchTerm)
                 .then(function (response) {
                     for (var i = 0; i < response.length; i++) {
                         listCtrl.found.push(response[i]);
                     }
                 })
             console.log(listCtrl.found)
         };
         
        listCtrl.removeItem = function (itemIndex) {
            console.log("'this' is: ", this);
            this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
            shoppingList.removeItem(itemIndex);
            this.title = origTitle + " (" + list.items.length + " items )";
        };

    };


    /*  PREVIOUS SOLUTION that worked with simple custom directives to listCtrl.found(listCtrl.searchTerm) on the button and listCtrl.response on the found-items directive)
        listCtrl.found = function (searchTerm) {
           MenuSearchService.getMatchedMenuItems(searchTerm).then(function (response) {
               listCtrl.response = response;
           })

           
    }*/


    MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
    function MenuSearchService($q, $http, ApiBasePath) {
        var service = this;
        var found = [];

        //this function below returns a promise (see above)
        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            }).then(function (response) {  //on success
                var items = response.data.menu_items;
                //console.log("menu_items: ", items);  //is the http request working?

                var filtered = items.filter(function (i) {
                    return i.description.includes(searchTerm.toLowerCase());
                })
                console.log("filtered: ", filtered); //is the filter working?
                return filtered;

            }).catch(function (error) {  //function error (response)
                console.log("Something went terribly wrong.");
            });
            return response;
        }

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        };


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