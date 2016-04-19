$(function(){
  getTweets();
});

var getTweets = function() {
  $('form#search').submit(function(e) {
    var fields = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "get_tweets.php",
      data: fields,
      dataType: 'json',
      success: function(response) {
        console.log(response);
        // tweets = response;
        // console.log(tweets);
      },
      error: function(errors) {
        console.log(errors);
      }
    });
    return false;
  });
};
