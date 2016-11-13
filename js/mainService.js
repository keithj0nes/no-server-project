
angular.module("myApp").service("mainService", function($http, $q){

  var base = "https://swapi.co/api/";


  // this.getSwapi = function(pageNum){
  //   return $http({
  //     method: "GET",
  //     url: base + "people/"
  //   }).then(function(response){
  //     if(response === 200){
  //       console.log(response.data);
  //     } else {
  //       console.log("Failed")
  //       return "Failed";
  //     }
  //   })
  // }





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

    // var films = {
    //   url: [
    //    "http://swapi.co/api/films/1/",
    //    "http://swapi.co/api/films/2/",
    //    "http://swapi.co/api/films/3/",
    //    "http://swapi.co/api/films/4/",
    //    "http://swapi.co/api/films/5/",
    //    "http://swapi.co/api/films/6/",
    //    "http://swapi.co/api/films/7/"
    //  ],
    //   names: [
    //     "A New Hope",
    //     "Empire Strikes Back",
    //     "Return of the Jedi",
    //     "The Phantom Menace",
    //     "Attack of the Clones",
    //     "Revenge of the Sith",
    //     "The Force Awakens"
    //   ]
    // }
    var correctFilms = {
       "http://swapi.co/api/films/1/": "A New Hope",
       "http://swapi.co/api/films/2/": "Empire Strikes Back",
       "http://swapi.co/api/films/3/": "Return of the Jedi",
       "http://swapi.co/api/films/4/": "The Phantom Menace",
       "http://swapi.co/api/films/5/": "Attack of the Clones",
       "http://swapi.co/api/films/6/": "Revenge of the Sith",
       "http://swapi.co/api/films/7/": "The Force Awakens"
   };



    function finished(){
      if (get1 && get2 && get3){

        // for (var i = 0; i < allChars.length; i++) {
        //   if(typeof allChars[i].films.length !== "undefined"){
        //     for (var j = 0; j < allChars[i].films.length; j++) {
        //       for (var k = 0; k < films.url.length; k++) {
        //         if(allChars[i].films[j] === films.url[k]){
        //           allChars[i].films[j] = films.names[k]
        //         }
        //       }
        //     }
        //   }
        // }

        allChars.forEach(function(character){
         character.films.forEach(function(film,index){
           for(prop in correctFilms){
             if(prop === film){
               character.films.splice(index,1,correctFilms[prop])
             }
           }
         });
       });



        deferObj.resolve(allChars);
        console.log(allChars)
      }
    }

    return deferObj.promise
  }








})
