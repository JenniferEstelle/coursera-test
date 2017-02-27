(function () {
    'use strict';

    angular.module('MenuApp')
        .component('menuItem', {
            templateUrl: 'templates/item-list.template.html',
            bindings: {
                items: '<',  //items in binding
            }
        });
})();