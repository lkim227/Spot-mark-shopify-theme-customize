$(document).ready(function() {
    $(".video-button").on("click", function(e) {
        e.preventDefault();
      $(".about-video-popup").fadeIn();
    });
    var video = $("about-video-popup video");
    $(".popup-close").on("click", function() {
      $(".about-video-popup").fadeOut();
      video.trigger('pause');
    });
  });
$(document).ready(function() {
    $(".video-button").on("click", function(e) {
        e.preventDefault();
      $(".about-video-popup").fadeIn();
    });
    var video = $("about-video-popup video");
    $(".popup-close").on("click", function() {
      $(".about-video-popup").fadeOut();
      video.trigger('pause');
    });
  });