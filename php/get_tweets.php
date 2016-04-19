<?php
  require_once('TwitterAPIExchange.php');

  $search = $_POST['search'];

  $settings = array(
    'oauth_access_token' => "565160171-HZ3i4QIfBpwHyIBq79mgmsOc89vRXta3GdhVwyI8",
    'oauth_access_token_secret' => "bjtL9Q0OjF9WqqCNC86z8s5Zz9T4YKktxFe2OPx7wmuJf",
    'consumer_key' => "MpM15fR63wJPxID2Y73Ol7pGT",
    'consumer_secret' => "ccce6t3HgTDnkkv0cy4r1c0BfTnLLZ38WLwO1h1x6jGCMJHqUR"
  );

  if (isset($_POST['search'])) {
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $getfield = '?q=';
    $getfield .= $search;
    $getfield .= '&result_type=recent&count=500';
    $requestMethod = 'GET';

    $twitter = new TwitterAPIExchange($settings);
    $response = $twitter->setGetfield($getfield)
        ->buildOauth($url, $requestMethod)
        ->performRequest();

    echo $response;
  } else {
    echo 'There was a problem making your request.';
  }

?>
