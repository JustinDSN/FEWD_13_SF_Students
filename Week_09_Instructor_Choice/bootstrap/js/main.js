$('#learn-more').click(showLearnMore)

function showLearnMore() {
  var titles = ["whoop whoop", "whoa", "much awesome"]
  console.log('learning more!')
  event.preventDefault()
  $modal = $('#learn-more-modal')
  $modal.find('.modal-title').text()
  $('#learn-more-modal').modal('show')
}