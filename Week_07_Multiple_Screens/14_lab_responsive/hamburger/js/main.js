console.log('main.js loaded');

$('#hamburger').click(hamburgerClicked);

function hamburgerClicked(evt) {
  evt.preventDefault();
  console.log('hamburgerClicked');
  if ($('#mobileNav').hasClass('active')) {
    $('#mobileNav').slideUp('slow').removeClass('active');
  }
  else {
    $('#mobileNav').slideDown('slow').addClass('active');
  }
}