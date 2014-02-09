$('#primary-nav li').click(function(e) {

  // this is the nav element that was clicked
  // by convention name variable that contain jQuery elements starting with '$'
  var $clickedNavElement = $(this)
  stylizeNavElement($clickedNavElement)
  toggleNavLinks($clickedNavElement)
  e.preventDefault()

})


function stylizeNavElement($clickedNavElement) {

  if ( $clickedNavElement.hasClass('active') ) {
    $clickedNavElement.removeClass('active')
  }
  else {
    $clickedNavElement.addClass('active').siblings().removeClass('active')
  }

}

function toggleNavLinks($clickedNavElement) {

  var $sectionLinks = $('#slide-down')

  if ( $sectionLinks.hasClass('open') && !$clickedNavElement.hasClass('active') ) {
    $sectionLinks.slideUp(150).removeClass('open')
  }
  else {
    prepSectionLinks($clickedNavElement)
    $sectionLinks.slideDown(150).addClass('open')
  }

}

// Shows the section that is supposed to be shown and hides the others
function prepSectionLinks($clickedNavElement) {
  var sectionId = $clickedNavElement.find('a').attr('href')

  $(sectionId).show().siblings().hide()
}
