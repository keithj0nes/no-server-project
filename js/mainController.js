angular.module("myApp").controller("mainController", function($scope, mainService, $interval){

// $scope.getSwapiChar = function() {
//   mainService.getSwapi().then(function(dataFromService){
//     // console.log(dataFromService)
//     $scope.swapiChar = dataFromService;
//   })
// }
//
// $scope.getSwapiChar();
// $interval(callAtInterval, 1000);

  mainService.getSwapi().then(function(dataFromService){
    $scope.swapiChars = dataFromService;
  })



  // function clockFn() {
  //   var today = new Date();
  //   $scope.alderaanClock = today.setHours(today.getHours()+3);
  //   $scope.endorClock = today.setHours(today.getHours()+2);
  //   $scope.nabooClock = today.setHours(today.getHours()+2);
  //   $scope.tatooineClock = today.setHours(today.getHours()+2);
  //
  //   if
  // }
  // clockFn();
  // $interval(clockFn, 1000);

  function clockFn() {
    $scope.alderaanClock = moment().format('LTS');
    $scope.endorClock = moment().utcOffset(-4).format("LTS");
    $scope.nabooClock = moment().utcOffset(-4).format("LTS");
    $scope.tatooineClock = moment().utcOffset(-4).format("LTS");
  }

  clockFn();
  $interval(clockFn, 1000)
  console.log(clockFn())

})

// function callAtInterval() {
//   console.log("Interval occrured");
// }
