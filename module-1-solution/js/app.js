angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function($scope){
    $scope.food = []
    $scope.foodList = '';
    $scope.message = '';
    $scope.foodRes = function(){
      $scope.food.push($scope.foodList);
        // $scope.message = 'Enjoy!';
        console.log($scope.footList);
    };
  }]);
