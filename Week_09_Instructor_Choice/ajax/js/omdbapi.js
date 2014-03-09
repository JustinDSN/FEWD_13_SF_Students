console.log('omdbapi.js loaded');

$("#searchButton").click(searchButtonClicked);

function searchButtonClicked(evt) {
  evt.preventDefault();
  console.log('searchButtonClicked');
  var searchText = $('#searchField').val();
  searchForMovies(searchText);
}

function searchForMovies(searchText) {
  $('#searchButton').hide()
  $('#loader').show()
  var url = 'http://www.omdbapi.com/?s=' + encodeURIComponent(searchText);

  $.getJSON(url, displayMovies);
}

function displayMovies(data) {
  console.log(data);
  $('#searchButton').show()
  $('#loader').hide()

  var items = [];

  $.each(data.Search, function(key, value) {
    items.push("<li data-imdbid=" + value.imdbID + ">" + value.Title + " " + value.Year + "</li>");
  });

  $(".my-movies-list").html(items.join(""));
}

$("body").on("click", "ul.my-movies-list li", clickOnMovie);

function clickOnMovie() {
  console.log(this);
  var imdbid = $(this).data('imdbid');
  console.log('imdbid: ' + imdbid);
  getMovieDetail(imdbid);
}

function getMovieDetail(imdbid) {
  var url = 'http://www.omdbapi.com/?i=' + encodeURIComponent(imdbid);

  $.getJSON(url, displayMovieDetail);
}

function displayMovieDetail(data) {
  console.log(data);

  $(".my-movie-poster").attr('src', data.Poster);
}

