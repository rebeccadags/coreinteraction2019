$(document).ready(function(){

    var shapeWidth = $('#shape').width();
    //get document size
    var width = $(document).width() - shapeWidth;
    var height = $(document).height() - shapeWidth;

    //speed and direction of animation
    var speedX = 50;
    var speedY = 50;

    var positionLeft = 0;
    var positionTop = 0;

  //60 frames per second
  function step(timestamp) {

    //update css variable
    positionLeft += speedX;
    positionTop += speedY;

    //change speed and direction variable if the ball hits the edge of the screen
    if( positionLeft > width ){
        speedX = speedX * -1 ;
    }

    if( positionLeft < 0 ){
      speedX = speedX * -1;
    }

    if( positionTop > height ){
      speedY = speedY * -1 ;
    }

    if( positionTop < 0 ){
      speedY = speedY * -1;
    }

    //edit class
    $('#shape').css("left", positionLeft)
    $('#shape').css("top", positionTop)

    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);

  //end document ready function
})

//1. once you've written this js, create a #shape in html and style it with css
//2. from there, modify/add to the script and html to create your own
