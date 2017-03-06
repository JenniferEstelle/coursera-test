(function () {
    "use strict";

    angular.module('common')
        .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;

        var user;


        service.saveUserPreferences = function (userDetail) {
            // service.user = user;
            user = {
                firstName: userDetail.firstName,
                lastName: userDetail.lastName,
                email: userDetail.email,
                phone: userDetail.phone,
                customerFav: userDetail.customerFav,
                customerFavItem: userDetail.customerFavItem
            };
            
        }

        service.getPreferences = function () {
            return user;
        }
    }


})();
