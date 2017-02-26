(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuCategoriesController', MenuCategoriesController);


    MenuCategoriesController.$inject = ['categories1'];
    function MenuCategoriesController(categories1) {
        var categoriesCtrl = this;
        categoriesCtrl.categories1 = categories1;
    }

})();
