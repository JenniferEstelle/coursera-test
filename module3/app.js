(function () {
    'use strict'

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            scope: {
                foundItems: '<',
                onRemove: '&',
            },
            restrict: 'E',
            controller: FoundItemsDirectiveController,
            controllerAs: 'listCtrl',
            bindToController: true,
            templateUrl: 'foundItems.html'
        };
        return ddo;
    }

    function FoundItemsDirectiveController() {
        var listCtrl = this;

        listCtrl.removeItem = function (itemIndex) {
            listCtrl.onRemove({ index: itemIndex });
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.searchTerm = "";

        // initialize
        narrowCtrl.foundItems = [];

        narrowCtrl.narrowItDown = function () {
            var searchTerm = narrowCtrl.searchTerm;
            if (searchTerm !== "") {
                MenuSearchService.getMatchedMenuItems(searchTerm).then(function (response) {
                    if (response.length === 0) {
                        narrowCtrl.message = "Nothing found.";
                    }
                    narrowCtrl.foundItems = response;
                    console.log("narrowCtrl.foundItems:", narrowCtrl.foundItems)
                })
            } else if (searchTerm == "") {
                narrowCtrl.message = "Nothing found.";
            }
        };

        narrowCtrl.removeItem = function (itemIndex) {
            narrowCtrl.foundItems.splice(itemIndex, 1);
        };
    };


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        //this function below returns a promise (see above)
        service.getMatchedMenuItems = function (searchTerm) {

            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            }).then(function (response) {  //on success
                var items = response.data.menu_items;
                var filtered = items.filter(function (i) {
                    console.log(arguments[0]);
                    return i.description.includes(searchTerm.toLowerCase());
                })
                return filtered;

            }).catch(function (error) {  //function error (response)
                console.log("Something went terribly wrong.");
            });
            return response;
        }
    }

})();

