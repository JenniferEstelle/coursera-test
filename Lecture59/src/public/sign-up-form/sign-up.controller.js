(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['signUpCtrl'];
    function SignUpController(signUpCtrl) {
        var signUpCtrl = this;

        signUpCtrl.user = user;
        signUpCtrl.user.firstName = firstName;
        signUpCtrl.user.lastName = lastName;
        signUpCtrl.user.email = email;
        signUpCtrl.user.phone = phone;
        signUpCtrl.user.customerFav = customerFav;

        signUpCtrl.submit = function () {
            signUpCtrl.completed = true;
        }
    }

})();
