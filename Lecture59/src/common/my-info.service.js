(function () {
    "use strict";

    angular.module('common')
        .service('myInfoService', myInfoService);


    myInfoService.$inject = ['MenuService', 'user'];
    function myInfoService(MenuService, user) {
        var service = this;

        if (user) {
            MenuService.getMenuItem()//NOT FINISHED
        }
        service.saveUserPreferences = function () {
            service.user = user;
        }

        service.getPreferences = function() {
            return service.user;
        }
    }


})();
