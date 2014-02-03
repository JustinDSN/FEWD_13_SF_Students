Attach 3 functions (throwRock, throwPaper, throwScissors) to the buttons.  ** Use console.log to verify the correct functions are getting called.

Two Global Variables
playerScore and botScore

getRobotsThrow()
  var botThrowNumber = Math.floor(Math.random() * 3);
  Map the number to a string.
  Returns:
  'Rock'
  'Paper'
  'Scissors'

getGameOutcome(playerThrow, botThrow)
 ** returns win, lose, draw

updateScore(outcome) - Updates Scoreboard
  update the playerScore and botScore

updateTeaser(outcome, playerThrow, botThrow) - 'You lost haha', 'You won etc'
  displays teaser at the bottom

funtion throwRock() {
  playGame('rock');
}

function playGame(playerThrow) {
  var botThrow = getRobotsThrow();
  var outcome = getGameOutCome(playerThrow, botThrow);
  updateScore(outcome);
  updateTeaser(outcome, playerThrow, botThrow);
}
