angular.module("myApp").controller("mainController", function($scope, mainService, $interval){


  mainService.getSwapi().then(function(dataFromService){
    $scope.swapiChars = dataFromService;
  })

  // $scope.getSwapi = function(){
  //   mainService.getSwapi($scope.currentPage).then(function(response){
  //     $scope.swapiChars = response.data.data;
  //   })
  // }


})
