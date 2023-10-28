// app.js
angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', function($scope) {
    $scope.checkLunch = function() {
        // Implement your logic to check the lunch input and set the message here
        // For example:
        if ($scope.lunchMenu) {
            var dishes = $scope.lunchMenu.split(',');
            if (dishes.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        } else {
            $scope.message = 'Please enter a list of dishes.';
        }
    };
});
