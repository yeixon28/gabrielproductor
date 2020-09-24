
$(function() {

  $(".progress2").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress2-left .progress2-bar');
    var right = $(this).find('.progress2-right .progress2-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});


