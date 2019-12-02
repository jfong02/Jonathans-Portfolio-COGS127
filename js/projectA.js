(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
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
    console.log("scrolling");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Scroll to Top Button stuff
  var topbtn = document.getElementById('top-icon-btn');
  function scrollshow() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      topbtn.style.display = "block";
    } else {
      topbtn.style.display = "none";
    }
  }
  window.onscroll = () => {
    scrollshow();
  };

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
  // project section reveal calls
  var revealDist = '20px';
  var revealDur = 900;
  var revealInter = 100;
  sr.reveal('#my-role', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#role-details', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#project-process', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#usr-research-intro', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#research-goals', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#research-methods', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#probl-state', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#personas-intro', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#personas-stuff', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#competitive-audit', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#ux-flow', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#ux-flow-explain', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#ui-sketch', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#lofi-intro', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('.lowfi-proto-img', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#lofi-explain1', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#lofi-explain2', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#lofi-explain3', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#lofi-explain4', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#usr-test-feed', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#pov', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#hifi-intro', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#final-redesign', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#final-redesign', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#polish-design-intro', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#lang-access', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#CCnOR', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#mid-drive', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#context-rate', {
    duration: revealDur,
    distance: revealDist,
    interval: revealInter,
  });
  sr.reveal('#reflection', {
    duration: revealDur,
    distance: revealDist,
    viewOffset: { top: -10 },
    interval: revealInter,
  });



})(jQuery); // End of use strict

$(document).ready(() => {
  console.log("loaded");

  // get scrollbar width
  let scrollWidth = getScrollbarWidth();

  temp = $('#proj-overview-col').height();
  // console.log(temp);
  document.getElementById('proj-overview-img').setAttribute("style", "height:" + temp + "px");
  // imgCode = "<img src='img/iPhone-8-RoseGold-Lyft-Mockup-Left-trbg.png' class='w-100'/>";
  // document.getElementById('proj-overview-img').append(imgCode);


  // create image for settings page final screen and remove scrollbar
  var settingsImg = document.createElement("img");
  settingsImg.src = "img/Final Screens/Setting Page Final.svg";
  settingsImg.id = "settingsImg";
  settingsImg.classList.add("d-block");
  settingsImg.classList.add("w-100");
  settingsImg.style.position = "absolute";

  // settingsImg.style.width = settingwidth;

  $('#set-scrn-h').css({
    "overflow-y": "hidden",
    "overflow-x": "hidden",
    // "width": scrollWidth + $('#set-scrn-h').width() + "px",
  });

  document.getElementById('set-scrn-h').appendChild(settingsImg);
  document.getElementById('remove-me').remove();

  // let settingwidth = parseFloat($('#settingsImg').css("width"));
  // console.log(settingwidth);


});

function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}