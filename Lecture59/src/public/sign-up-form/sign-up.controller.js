(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var signUpCtrl = this;
        signUpCtrl.customerFavNotFound = false;
        // signUpCtrl.emptyMessage = "";

        var user = {
            firstName: signUpCtrl.firstName,
            lastName: signUpCtrl.lastName,
            email: signUpCtrl.email,
            phone: signUpCtrl.phone,
            customerFav: signUpCtrl.customerFav,
            customerFavItem: signUpCtrl.customerFavItem
        }


        signUpCtrl.submit = function (event) {
            var shortName = signUpCtrl.user.customerFav
            console.log('customerFav:', shortName);

            MenuService.getMenuItem(shortName)
                .then(function (itemFoundByShortName) {
                    signUpCtrl.user.customerFavItem = itemFoundByShortName;
                    signUpCtrl.customerFavNotFound = false;
                     console.log('signUpCtrl.user.customerFav', signUpCtrl.user.customerFavItemDetails);  //can access ANY of item details using .short_name, etc.

                    if (itemFoundByShortName === undefined) {
                        signUpCtrl.customerFavNotFound = true;
                    } 
                
                }).catch(function (error) {
                    console.log("dish not found.");
                    signUpCtrl.customerFavNotFound = true;
                })

            console.log("item found by shortname", signUpCtrl.user.customerFavItem);

        }

    }

})();
