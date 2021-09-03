$(document).ready(function () {
  $('#video').on('click', function() {
    playVideo();
  });
});

function playVideo() {
  if (video.paused) {
    video.play();
    hidePoster();
  } else {
    video.pause();
  }
}

function hidePoster() {
  var poster = $('#video-poster');
  poster.css("display", "none"); 
}
