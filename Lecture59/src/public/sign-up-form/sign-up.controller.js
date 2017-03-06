(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MyInfoService', 'MenuService'];
    function SignUpController(MyInfoService, MenuService) {
        var $ctrl = this;
        $ctrl.customerFavNotFound = false;

        $ctrl.user = {
            firstName: $ctrl.firstName,
            lastName: $ctrl.lastName,
            email: $ctrl.email,
            phone: $ctrl.phone,
            customerFav: $ctrl.customerFav,
            customerFavItem: $ctrl.customerFavItem
        }


        $ctrl.submit = function (event) {
            var shortName = $ctrl.user.customerFav
            console.log('customerFav:', shortName);

            MenuService.getMenuItem(shortName)
                .then(function (itemFoundByShortName) {
                    user.customerFavItem = itemFoundByShortName;
                    $ctrl.customerFavNotFound = false;
                    console.log('user.customerFavItem', user.customerFavItem);  //can access ANY of item details using .short_name, etc..
                    

                    MyInfoService.saveUserPreferences(user) = function() {
                        $ctrl.preferenceSavedMsg = true;
                    }
                    if (itemFoundByShortName === undefined) {
                        $ctrl.customerFavNotFound = true;
                    }

                }).catch(function (error) {
                    console.log("dish not found.");
                    $ctrl.customerFavNotFound = true;
                })
        }
    }

})();
