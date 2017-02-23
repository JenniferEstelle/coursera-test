// Create items.component.js file and create a component called items that shows all of the menu items for a particular category.
// should NOT directly use the MenuDataService to fetch it's own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).


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
    