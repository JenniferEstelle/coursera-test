// Create items.component.js file and create a component called items that shows all of the menu items for a particular category.
// should NOT directly use the MenuDataService to fetch it's own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).


(function () {
    'use strict';

    angular.module('MenuApp')
        .component('menuItem', {
            templateUrl: 'templates/item-list.template.html',
            bindings: {
                items: '<',
            }
        });

})();