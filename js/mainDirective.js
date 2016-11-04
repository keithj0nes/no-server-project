angular.module("myApp").directive("colorChange", function(){
  var newColor = changeColor();
  function changeColor(){
    var colors = ["blue", "red", "yellow", "orange","aliceblue","peachpuff","lightsteelblue","olive", "salmon", "orangered", "lavenderblush", "powderblue", "violet"];

    var index = Math.floor(Math.random() * colors.length);

    return colors[index];
    console.log("this is colors index", colors[index])
  }

  return {
    restrict: "E",
    link: function(scope, element, attributes){
      element.on('click', function(event){
        var newColor = changeColor();
        var targetElement = element.find(".character");
        setInterval(function(){
          targetElement.css("color", newColor);
        }, 1000)
      })
    }
  }
})
