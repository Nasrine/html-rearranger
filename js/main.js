var $h1Below = $('<h1>');
var $h1Above = $('<h1>');
var $liBelow = $('<ul>');
var $liAbove = $('<ul>');

$h1Below.html('Below Ground Veggies');
$('body').append($h1Below);
$('body').append($liAbove);

$h1Above.html('Above Ground Veggies');
$('body').append($h1Above);
$('body').append($liAbove);

$('ul li' ). each(function (){
  if ($(this).hasClass('below')) {
    $liAbove.append($(this));
    } else {
    $liBelow.append($(this));
  }
});



