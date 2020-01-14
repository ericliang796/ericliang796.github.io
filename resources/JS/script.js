$(document).ready(function() {
    
    /* For the sticky navigation */ 
    $('.js--about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '70px'
    });
    
    
    /* Navigation scroll */
   // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animations on scroll */
    $('.js--wp1').waypoint(function(direction) {
        $('.js--wp1').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
    
    $('.js--wp2').waypoint(function(direction) {
        $('.js--wp2').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    
    $('.js--wp3').waypoint(function(direction) {
        $('.js--wp3').addClass('animated pulse');
    }, {
        offset: '80%'
    });
    
    (function(){
      var words = [
          'Bonjour',
          'Hola',
          '你好',
          'Привет',
          'こんにちは',
          'नमस्ते',
          '안녕하세요',
          'مرحبا'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();
    
});