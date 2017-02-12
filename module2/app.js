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
        console.log('controller exists!');
        var buyCtrl = this;
        buyCtrl.toBuy = [
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
        console.log(buyCtrl.toBuy);
    };

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        console.log('controller exists!');
        var boughtCtrl = this;  //you are not changing the value or assigning this to boughtCtrl here.  Readability is the purpose here.


    };

    function ShoppingListCheckOffService() {
        // console.log("test!");



        // //method that removes item from tobuy array and pushes to the bought array
        // var service = this;
        // this.bought = [];
        // this.tobuy = [];

        // service.markBought = function () {
        //     console.log("service.buyItem is working");
        //     //add item to bought array
        //     //remove item from tobuy array 

        // };


    };


})();