$(function(){
  var tweets;
  getTweets();
});

var getTweets = function() {
  $('form#search').submit(function(e) {
    $('.loading').fadeIn(400);
    var fields = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "php/get_tweets.php",
      data: fields,
      dataType: 'json',
      success: function(response) {
        tweets = response;
        var scope = angular.element($("#results")).scope();
        scope.safeApply(function(){
          scope.tweets = tweets.statuses;
          scope.searchTerm = tweets.search_metadata.query;
        });
        console.log(scope.tweets);
        $('#results').fadeIn('fast');
        $('html, body').animate({
          scrollTop: $("#results").offset().top
        }, 1000);
        $('.loading').fadeOut(400);
      },
      error: function(errors) {
        console.log(errors);
      }
    });
    return false;
  });
};
