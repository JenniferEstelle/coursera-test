(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('ToBuyController', ToBuyController)  //define viewModel of view
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //apply properties directly to the instance of the controller itself.  Angular JS will bind this instance of the controller to $scope behind the scenes. 
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buyCtrl = this;

        buyCtrl.toBuy = ShoppingListCheckOffService.toBuy;  //scope variable points to service variable (toBuy)

        buyCtrl.markAsBought = function (item) {
            ShoppingListCheckOffService.markAsBought(item);
        };

        buyCtrl.emptyMessage = "Everything is bought!";
    };

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;  //you are not changing the value or assigning this to boughtCtrl here.  Readability is the purpose here.

        boughtCtrl.bought = ShoppingListCheckOffService.bought;
        boughtCtrl.emptyMessage = "Nothing bought yet";

    };

    function ShoppingListCheckOffService() {

        // //method that removes item from tobuy array and pushes to the bought array
        var service = this;
        service.bought = [];

        service.toBuy = [
            {
                name: 'cookies',
                quantity: '10'
            },
            {
                name: 'chips',
                quantity: '10'
            },
            {
                name: 'drinks',
                quantity: '10'
            },
            {
                name: 'kale',
                quantity: '10'
            },
            {
                name: 'tuna',
                quantity: '10'
            }
        ];

        service.markAsBought = function (item) {
            console.debug(item.name);
            service.bought.push(item);
            service.toBuy.splice(service.toBuy.indexOf(item), 1);
        }
    };


})();
