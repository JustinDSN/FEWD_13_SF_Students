var redDivClickCount = 0;
var yellowDivClickCount = 0;
var greenDivClickCount = 0;

console.log("javascript file loaded");

document.getElementById('redDiv').onclick = redDivClicked;

function redDivClicked() {
  console.log('redDiv clicked');
  redDivClickCount = redDivClickCount + 1;

  if (redDivClickCount === 10) {
    document.getElementById('redDiv').style.display = "none";
  }

  document.getElementById('redDiv').innerHTML = "<h1>Hello, Red Div " + redDivClickCount + "</h1>";
}

//JQuery Syntax
$('#yellowDiv').click(yellowDivClicked);

function yellowDivClicked() {
  console.log('yellowDiv clicked');
  yellowDivClickCount = yellowDivClickCount + 1;

  if (yellowDivClickCount === 10) {
    $('#yellowDiv').hide();
  }

  $('#yellowDiv').html('<h1>Hello, Yellow Div ' + yellowDivClickCount + '</h1>');
}

$('#greenDiv').click(greenDivClicked);

function greenDivClicked() {
  console.log('greenDiv clicked');

  greenDivClickCount++;
  $('#greenDiv').html('<h1>Hello, Green Div ' + greenDivClickCount + '</h1>');

  if (greenDivClickCount === 10) {
    $('#redDiv').html('').show();
    $('#yellowDiv').html('').show();
    redDivClickCount = 0;
    yellowDivClickCount = 0;
    greenDivClickCount = 0;
    $('#greenDiv').html('');
  }
}

