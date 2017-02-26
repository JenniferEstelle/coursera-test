//is this in LESSON 4?

(function () {
    'use strict';

    angular.module('MenuApp')
        .component('menuCategory', {
            templateUrl: 'templates/category-list.template.html',
            bindings: {
                items: '<',
            }
        });

})();

