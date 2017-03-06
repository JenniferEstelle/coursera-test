(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MyInfoService', 'MenuService'];
    function SignUpController(MyInfoService, MenuService) {
        var signUpCtrl = this;
        signUpCtrl.customerFavNotFound = false;
        signUpCtrl.signUpSucceded = false;




        signUpCtrl.submit = function (event) {
            var shortName = signUpCtrl.user.customerFav
            console.log('customerFav:', shortName);

            MenuService.getMenuItem(shortName)
                .then(function (itemFoundByShortName) {
                    signUpCtrl.user.customerFavItem = itemFoundByShortName;
                    signUpCtrl.customerFavNotFound = false;
                    signUpCtrl.signUpSucceded = true;
                    console.log('user.customerFavItem', signUpCtrl.user.customerFavItem);  //can access ANY of item details using .short_name, etc..


                    MyInfoService.saveUserPreferences(signUpCtrl.user);
                    // signUpCtrl.preferenceSavedMsg = true;

                    if (itemFoundByShortName === undefined) {
                        signUpCtrl.customerFavNotFound = true;
                        signUpCtrl.signUpSucceded = false;
                    }

                }).catch(function (error) {
                    console.log("dish not found.");
                    signUpCtrl.customerFavNotFound = true;
                })
        }
    }

})();
