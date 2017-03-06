(function () {
    "use strict";

    angular.module('common')
        .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;

        
        service.saveUserPreferences = function (user) {
            service.user = user;
        }

        service.getPreferences = function() {
            return service.user;
        }
    }


})();
