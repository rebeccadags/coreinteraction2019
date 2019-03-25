
$(document).ready(function(){

var name = "Rebecca D'Agostino";
var time = new Date();
var ticker = 0;
var ticker2 = 0;
var colors = ["#bccad6", "#8d9db6", "#667292", "#f1e3dd"];

//change some css
$('p').css("font-size", '100px');
$('p').css("color", 'white');
$('p').css("font-family", 'monospace');

//define the function
function getTime() {
    time = new Date();

    //change some html
    $('#name').text(name);
    $('#time').text(time);
    $('#ticker').text(ticker);
    $('#ticker2').text(ticker2);

    var rotate = 'rotate(' + ticker + 'deg)';
    $('#rectangle').css("transform", rotate);
    $('#rectangle').css("background-color", colors[ticker2]);

    ticker += 10;
    ticker2 += 1;



    if(ticker2 >= 4) {
        ticker2=0;
    }
}
// call it
getTime();



setInterval(function(){
//call it every second
getTime();
},1000)

//end document ready function
})
