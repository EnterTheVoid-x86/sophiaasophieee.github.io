$(document).ready(function() {
  var snowflakeCount = 100;
  var snowflakeImage = 'https://i.imgur.com/RDSMKvt.png'; // Customize with your own image URL

  for (var i = 0; i < snowflakeCount; i++) {
    var isImageSnowflake = Math.random() < 0.5; // 50% chance to be an image snowflake
    var scale = Math.random() * 0.5 + 0.5; // Scale between 0.5 and 1.0
    var snowflake = $('<div class="snowflake"></div>').css({
      left: Math.random() * 100 + 'vw',
      width: (Math.random() * 5 + 5) * scale + 'px',
      height: (Math.random() * 5 + 5) * scale + 'px',
      animationDuration: Math.random() * 3 + 2 + 's',
      animationDelay: Math.random() * 2 + 's',
    });

    if (isImageSnowflake) {
      snowflake.addClass('snowflake-image').css({
        backgroundImage: 'url(' + snowflakeImage + ')'
      });
    }

    $('#snowflakes').append(snowflake);
  }
});
