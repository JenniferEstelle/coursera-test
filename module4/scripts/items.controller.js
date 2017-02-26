(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ListItemsController', ListItemsController);


    ListItemsController.$inject = ['$stateParams', 'items1'];
    function ListItemsController($stateParams, items1) {
        var listItemsCtrl = this;
        listItemsCtrl.items1 = items1;
    }

})();
