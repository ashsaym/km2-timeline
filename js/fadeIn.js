$(window).on("load", function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".timeline-panel-text").each(function() {
      var objectBottom = $(this).offset().top -100 + $(this).outerHeight();
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      } else {
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  }).scroll();
});