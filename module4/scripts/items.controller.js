(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ListItemsByCategoryController', ListItemsByCategoryController);


    ListItemsByCategoryController.$inject = ['$stateParams', 'items1'];
    function ListItemsByCategoryController($stateParams, items1) {
        var listItemsCtrl = this;
        listItemsCtrl.items1 = items1;
    }

})();
