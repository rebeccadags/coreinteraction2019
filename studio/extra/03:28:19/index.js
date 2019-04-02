// check if document is ready
$(document).ready(function() {

var width = $(document).width();
var height = $(document).height();
var circleWidth = $("#circle").width();

var colors = ["green", "brown", "grey", "blue"]
var heys = ["hey", "hi", "hello", "sup"]

console.log(colors[0])


setInterval(function(){

var randomWidth = Math.random() * width;
var randomHeight = Math.random() * height;
var randomColor = Math.floor(Math.random()*colors.length);
var randomText = Math.floor(Math.random()*heys.length);


console.log(randomColor)


var leftCss = Math.floor(randomWidth) + "px"
var topCss = Math.floor(randomHeight) + "px"



$("#circle").css("left", leftCss)
$("#circle").css("top", topCss)
$("#circle").css("background-color", colors[randomColor])
$("#text").html(heys[randomText])


},1000)

// end document ready function
})
