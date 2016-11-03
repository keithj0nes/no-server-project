$(document).ready(function(){
  var nav = $('nav');

  // $(window).resize(function(){
  //   if($(window).width() <= 567){
  //     $(window).scroll(function () {
  //         if ($(this).scrollTop() > 212) {
  //             nav.addClass("f-nav");
  //         } else {
  //             nav.removeClass("f-nav");
  //         }
  //     });
  //   }
  // })
  //
  // $(window).resize(function(){
  // 	if ($(window).width() >= 568){
  //     $(window).scroll(function () {
  //         if ($(this).scrollTop() > 310) {
  //             nav.addClass("f-nav");
  //         } else {
  //             nav.removeClass("f-nav");
  //         }
  //     });
  // 	}
  // });
  //
  // $(window).resize(function(){
  //   if ($(window).width() >= 1200){
  //     $(window).scroll(function() {
  //       if ($(this).scrollTop() > 440) {
  //         nav.addClass("f-nav");
  //       } else {
  //         nav.removeClass("f-nav");
  //       }
  //     })
  //   }
  // })



  $(window).resize(function(){
    if($(window).width() <= 567){
      $(window).scroll(function () {
          if ($(this).scrollTop() > 212) {
              nav.addClass("fixed-nav");
          } else {
              nav.removeClass("fixed-nav");
          }
      });
    } else if ($(window).width() > 568 && $(window).width() < 1199){
      $(window).scroll(function () {
          if ($(this).scrollTop() > 310) {
              nav.addClass("fixed-nav");
          } else {
              nav.removeClass("fixed-nav");
          }
      });
  	} else if ($(window).width() > 1200){
      $(window).scroll(function() {
        if ($(this).scrollTop() > 440) {
          nav.addClass("fixed-nav");
        } else {
          nav.removeClass("fixed-nav");
        }
      });
    }
  })















});
