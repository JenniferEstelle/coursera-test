(function () {
    'use strict'

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);  //define viewModel of view

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        //when you click the "Check if too much button", run foodcalc.
        $scope.foodcalc = function () {
            var food = $scope.foodlist.split(",");
            console.log(food);


            //filter through food, and trim whitespace around , 
            var filtered = food.filter(function (item) {
                return item.trim() > 0;
            }).map(function (item) {
                return item.trim();
            });
            console.log(filtered);


            if (filtered.length <= 0) {
                $scope.foodresponse = "Please enter data";
            } else if (filtered.length <= 3 && filtered.length != 0) {
                $scope.foodresponse = "Enjoy!";
            } else if (filtered.length > 3) {
                $scope.foodresponse = "Too much!";
            }
        };
    };

})();
