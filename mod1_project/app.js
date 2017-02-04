(function () {
    'use strict'

    angular.module('LunchCheck', [])


        //how we define the viewModel of our view...takes the name of the controller, and a function that defines the functionality of that controller
        .controller('LunchCheckController', LunchCheckController);  //define viewModel of view


    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        //when you click the "Check if too much button", run foodcalc.
        $scope.foodcalc = function () {
            var food = $scope.foodlist.split(",");
            console.log(food); //is food returning an array or a string of arrays? 

            //filter through food, and trim whitespace around , 
            var filtered = food.filter(function (item) {
                return item.trim() > 0;
            }).map(function(item) {
                return item.trim();
            });

            
            console.log(filtered);  //is filtered working correctly?

            if (filtered.length <= 0) {
                $scope.foodresponse = "Please enter data";
            } else if (filtered.length <= 3 && filtered.length != 0) {
                $scope.foodresponse = "Enjoy!";
            } else if (filtered.length > 3) {
                $scope.foodresponse = "Too much!";
            }

        };


        //user clicks button (foodcalc)
        //user sees a message display

    };

})();
