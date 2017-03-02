(function () {
    "use strict";

    angular.module('public')
        .component('signUp', {
            templateUrl: 'src/public/sign-up-form/sign-up.html',
            bindings: {
                menuItem: '<'
            },
            controller: SignUpController
        });


/*    SignUpController.$inject = ['ApiPath'];
    function SignUpController(ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
    }
*/
})();
