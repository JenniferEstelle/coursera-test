(function () {
    "use strict";

    angular.module('common')
        .service('MyInfoService', MyInfoService);


    MyInfoService.$inject = ['MenuService', 'user'];
    function MyInfoService(MenuService, user) {
        var service = this;

        
        service.saveUserPreferences = function (user) {
            service.newUser = user;
        }

        service.getPreferences = function() {
            return service.newUser;
        }
    }


})();
