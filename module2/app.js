(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('ToBuyController', ToBuyController);  //define viewModel of view

//apply properties directly to the instance of the controller itself.  Angular JS will bind this instance of the controller to $scope behind the scenes. 
    function ToBuyController () {
        console.log("controller exists!")
        var buy = this;
        this.title = "buy me!"
    };

    function AlreadyBoughtController() {
        console.log("controller exists!")
        var bought = this;
        this.title = "bought!"
    };


})();
