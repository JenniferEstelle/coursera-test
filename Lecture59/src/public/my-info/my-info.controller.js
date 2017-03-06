(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user'];
    function MyInfoController(user) {
        var myInfoCtrl = this;
        myInfoCtrl.alreadySignedUp = false;

        if (user) {
            myInfoCtrl.alreadySignedUp = true;
            myInfoCtrl.firstName = user.firstName
            myInfoCtrl.lastName = user.lastName
            myInfoCtrl.email = user.email
            myInfoCtrl.phone = user.phone
            myInfoCtrl.customerFav = user.customerFav
            myInfoCtrl.customerFavItem = user.customerFavItem
            console.log("InfoCtrl.user.customerFav", user.customerFavItem);
            
        }
        else {
            myInfoCtrl.alreadySignedUp = false;
        }
    }


})();
