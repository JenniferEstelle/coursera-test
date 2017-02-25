(function () {
    'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject= ['MenuDataService'];
function MenuCategoriesController(MenuDataService) {
    var categoriesCtrl = this;

    categoriesCtrl.items = [];

    categoriesCtrl.$onInit = function() {
        MenuDataService.getAllCategories()
        .then(function (response) {
            categoriesCtrl.items = response;
        })
    }
}

})();
