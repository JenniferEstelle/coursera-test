// Create categories.component.js file and create component called categories that shows all available categories in the menu to the user.
// should NOT directly use the MenuDataService to fetch it's own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).
//is this in LESSON 4?

(function () {
    'use strict';

angular.module('MenuApp') 
.component('categories', {
    templateUrl: 'templates/category-list.template.html',
    bindings: {
        items: '<',      
    }
});



})();

//EXP:
/*(function () {
'use strict';

angular.module('MenuDataService')
.component('shoppingList', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();*/

//EXP:
/* .component('foundItems', {
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
        }*/
