angular.module("myApp").controller("mainController", function($scope, mainService){

// $scope.getSwapiChar = function() {
//   mainService.getSwapi().then(function(dataFromService){
//     // console.log(dataFromService)
//     $scope.swapiChar = dataFromService;
//   })
// }
//
// $scope.getSwapiChar();


  mainService.getSwapi().then(function(dataFromService){
    $scope.swapiChars = dataFromService;
  })
})
