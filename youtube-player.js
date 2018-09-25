// source: https://developers.google.com/youtube/iframe_api_reference#Getting_Started

// load the youtube player api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  youtubeApiLoaded = true;
}

jQuery(function($){

  $(".preview-link").click( function() {

    // lets start the video

    // if api is ready
    if(youtubeApiLoaded){

      // set target
      var target = 'player-container';

      // get video info
      var videoId = $(this).parent().attr('data-video-id');
      var videoTitle = $(this).find('.video-title').text();

      if(player){
        // found an existing player

        // change the playing video
        player.loadVideoById(videoId);

      } else{
        // no existing player found

        // create a new player
        player = new YT.Player(target, {
          width: '640',
          height: '360',
          videoId: videoId,
          playerVars: {
            'start': 0,
            'controls': 0,
            'rel': 0,
          },
          events: {
            'onReady': onPlayerReady,
          }
        });

        // start the video
        function onPlayerReady(event) {
          event.target.playVideo();
        }

      }

      // display video meta
      $('#player-meta > h2').animate({'opacity': 0}, 400, function(){
        $(this).text(videoTitle).animate({'opacity': 1}, 400);
      });




    }





  });

});