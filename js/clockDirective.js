angular.module("myApp").directive("clock", function($interval){


  return {
    restrict: "AE",
    templateUrl: "./test.html",
    link: function(scope, element, attr){

          function clockFn() {
            scope.alderaanClock = moment().format('LTS');
            scope.endorClock = moment().utcOffset(-10).format("LTS");
            scope.nabooClock = moment().utcOffset(-4).format("LTS");
            scope.tatooineClock = moment().utcOffset(-1).format("LTS");
          }

          clockFn();
          $interval(clockFn, 1000)
          console.log(clockFn())

          }

    }



})
