(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
  sr.reveal('.sr-projectimg', {
    duration: 800,
    scale: 0.8,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-img', {
    duration: 1000,
    scale: 0.9,
    delay: 200,
    distance: '0px'
  });

})(jQuery); // End of use strict

function activateskill1() {
  var a = document.getElementById("Music")
  if (a.style.opacity=="0")
    a.style.opacity="1";
  else
    a.style.opacity="0";
}
function activateskill2() {
  var a = document.getElementById("Video")
  if (a.style.opacity=="0") {
    a.style.opacity="1";
  }
  else {
    a.style.opacity="0";
  }
}
function activateskill3() {
  var a = document.getElementById("Photo")
  if (a.style.opacity=="0")
    a.style.opacity="1";
  else
    a.style.opacity="0";
}
function activateskill4() {
  var a = document.getElementById("Coding")
  if (a.style.opacity=="0")
    a.style.opacity="1";
  else
    a.style.opacity="0";
}


