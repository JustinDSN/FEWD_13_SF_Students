//Global Variables
var images = ['images/lolcat1.jpg',
              'images/lolcat2.jpg',
              'images/lolcat3.jpg',
              'images/lolcat4.jpg',
              'images/lolcat5.jpg',
              'images/lolcat6.jpg',
              'images/lolcat7.jpg',
              'images/lolcat8.jpg'];
var votes = [];
var currentImageIndex = 0;

//Wire up event handlers
$('#back-button').click(backButtonClicked);
$('#skip-button').click(skipButtonClicked);
$('#your-vote').change(yourVoteChanged);

function backButtonClicked() {
  console.log('backButtonClicked currentImageIndex:' + currentImageIndex);

  if (currentImageIndex > 0) {
    changeImage(--currentImageIndex);
    $('#your-vote').val(votes[currentImageIndex]);
  }
  else {
    console.log('at first image');
  }
}

function skipButtonClicked() {
  console.log('skipButtonClicked currentImageIndex:' + currentImageIndex);
  castVoteForCurrentImage(0);
  nextImage();
}

function yourVoteChanged() {
  console.log('yourVoteChanged');

  var currentVote = $('#your-vote').val();
  castVoteForCurrentImage(currentVote);

  nextImage();
  $('#your-vote').val(0);
}

function nextImage() {
  console.log('nextImage called');
  if (currentImageIndex < images.length - 1) {
    changeImage(++currentImageIndex);
  }
  else {
    console.log('no more images');
    updateResults(getAverageVotes());
  }
}

function updateResults(average) {
  $('#results').html('The average votes was: ' + average);
}

function castVoteForCurrentImage(voteValue) {
  console.log('casting voteValue: ' + voteValue + ' for currentImageIndex: ' + currentImageIndex);
  votes[currentImageIndex] = voteValue;
  console.log('votes: ' + votes);
}

function changeImage(index) {
  console.log('changing to index: ' + index);
  $('#image-to-vote-on').attr('src', images[index]);
}

function getAverageVotes() {
  console.log('getAverageVotes called');
  var sum = 0;
  votes.forEach(function(val) {
    sum += parseInt(val);
  });
  console.log('sum: ' + sum);
  var average = sum / votes.length;
  console.log('average: ' + average);
  return average;
}