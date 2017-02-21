(function () {
    'use strict'

    angular.module('MenuApp', [])
        // .controller('NarrowItDownController', NarrowItDownController)
        // .service('MenuSearchService', MenuSearchService)
        .component('foundItems', {
            templateUrl: 'foundItems.html',
            controller: FoundItemsComponentController,
            binding: {
                items: '<',
                myTitle: '@title', //DOM attribute value binding 
                onRemove: '&'  //mapped to on-remove in the parent HTML, it's going to be a reference function (callback back to the parent controller)
            }
        });

    function FoundItemsComponentController() {
        var $ctrl = this;

        $ctrl.removeItem = function (itemIndex) {
            $ctrl.onRemove({ index: itemIndex });
        }
    }

    /*    NarrowItDownController.$inject = ['MenuSearchService'];
        function NarrowItDownController(MenuSearchService) {
            var narrowCtrl = this;
           
        };*/


    /*    MenuSearchService.$inject = [];
        function MenuSearchService() {
            var service = this;
    
        }
    */
})();

