
angular.module("myApp").service("mainService", function($http, $q){

  var base = "http://swapi.co/api/";

  this.getSwapi = function(){
    var deferObj = $q.defer();
    var allChars = []
    var get1 = false;
    var get2 = false;
    var get3 = false;
    // var get4 = false;

    $http({
      method: "GET",
      url: base + "people/"
    }).then(function(response){
        if(response.status === 200){
          console.log(response.data)
          for(var i = 0; i < response.data.results.length; i++){
            allChars.push(response.data.results[i])
          }
          get1 = true;
          finished(); //run finished which checks to see if all GETs are completed
        }
        return "Failed"
    })

    $http({
      method: "GET",
      url: base + "people/?page=2"
    }).then(function(response){
        if(response.status === 200){
          console.log(response.data)
          for(var i = 0; i < response.data.results.length; i++){
            allChars.push(response.data.results[i])
          }
          get2 = true;
          finished(); //run finished which checks to see if all GETs are completed
        }
        return "Failed"
    })

    $http({
      method: "GET",
      url: base + "people/?page=3"
    }).then(function(response){
        if(response.status === 200){
          console.log(response.data)
          for(var i = 0; i < response.data.results.length; i++){
            allChars.push(response.data.results[i])
          }
          get3 = true;
          finished();//run finished which checks to see if all GETs are completed
        }
        return "Failed"
    })

    // $http({
    //   method: "GET",
    //   url: base + "people/?page=4"
    // }).then(function(response){
    //     if(response.status === 200){
    //       console.log(response.data)
    //       for(var i = 0; i < response.data.results.length; i++){
    //         allChars.push(response.data.results[i])
    //       }
    //       get4 = true;
    //       finished(); //run finished which checks to see if all GETs are completed
    //     }
    //     return "Failed"
    // })


    function finished(){
      if (get1 && get2 && get3){
        deferObj.resolve(allChars);
        console.log(allChars)
      }
    }

    return deferObj.promise
  }


})
