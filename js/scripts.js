$(function(){
  var tweets;
  getTweets();
});

var getTweets = function() {
  $('form#search').submit(function(e) {
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
        });
        console.log(scope.tweets);
        $('#results').fadeIn('fast');
        $('html, body').animate({
          scrollTop: $("#results").offset().top
        }, 400);
      },
      error: function(errors) {
        console.log(errors);
      }
    });
    return false;
  });
};
