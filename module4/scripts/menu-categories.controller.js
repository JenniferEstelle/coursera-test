(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuCategoriesController', MenuCategoriesController);

    MenuCategoriesController.$inject = ['MenuDataService'];
    function MenuCategoriesController(MenuDataService) {
        var categoriesCtrl = this;

        categoriesCtrl.categories = [];

        categoriesCtrl.displayCategories = function () {
            MenuDataService.getAllCategories().then(function (response) {
                console.log('categoryResponse:', response)
                categoriesCtrl.categories = response;
                console.log('categoriesCtrl.categories', categoriesCtrl.categories);

            })
        }
    }

})();
