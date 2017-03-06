(function () {
    'use strict';

angular.module('public')
    .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user'];
function MyInfoController(user) {
    var $ctrl = this;

    $ctrl.user = {
        firstName: $ctrl.firstName,
        lastName: $ctrl.lastName,
        email: $ctrl.email,
        phone: $ctrl.phone,
        customerFav: $ctrl.customerFav,
        customerFavItem: $ctrl.customerFavItem
    }
}


})();
