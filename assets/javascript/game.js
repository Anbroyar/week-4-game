var counter = 0;
var wins = 0;
var losses = 0;
var target = Math.floor(Math.random() * 101) + 19;


var c1 = Math.floor(Math.random() * 11) + 1;
var c2 = Math.floor(Math.random() * 11) + 1;
var c3 = Math.floor(Math.random() * 11) + 1;
var c4 = Math.floor(Math.random() * 11) + 1;

function restartgame() {
  var target = Math.floor(Math.random() * 101) + 19;
  $('#number-guess').text(target);

  var c1 = Math.floor(Math.random() * 11) + 1;
  var c2 = Math.floor(Math.random() * 11) + 1;
  var c3 = Math.floor(Math.random() * 11) + 1;
  var c4 = Math.floor(Math.random() * 11) + 1;
   counter = 0;
  $("#total-score").text(counter);
}
function win() {
  wins++;
  $('#wins').text(wins);
   restartgame();
  
}
function lose() {
  losses++;
  $('#losses').text(losses);
   restartgame();
 
}
   
$('#crystal1').on('click', function() {
  
 counter = counter + c1;
 $("#total-score").text(counter);

  if (counter === target) {
    win();
   
  }
  else if(counter >= target) {
    lose();
   
  }

}); 
$('#crystal2').on('click', function() {
  
 counter = counter + c2;
 $("#total-score").text(counter);

  if (counter === target) {
    win();
  }
  else if(counter >= target) {
    lose();
  }

}); 
$('#crystal3').on('click', function() {
  
 counter = counter + c3;
 $("#total-score").text(counter);

  if (counter === target) {
    win();
  }
  else if(counter >= target) {
    lose();
  }

});

$('#crystal4').on('click', function() {
  
 counter = counter + c4;
 $("#total-score").text(counter);

  if (counter === target) {
    win();
  }
  else if(counter >= target) {
    lose();
  }

}); 
 
$('#number-guess').text(target);
$('#total-score').text(counter);
$('#wins').text(wins);
$('#losses').text(losses);

