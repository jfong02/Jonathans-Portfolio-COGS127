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

  sr.reveal('#my-role, #role-details, #project-process, #usr-research-intro, #research-goals,\
    #research-methods1, #quotes, #research-methods2, #probl-state, #personas-intro, #personas-stuff,\
    #competitive-audit, #ux-flow, #ux-flow-explain, #ui-sketch, #lofi-intro, .lowfi-proto-img,\
    #lofi-explain1, #lofi-explain2, #lofi-explain3, #lofi-explain4, #usr-test-feed, #pov, #hifi-intro,\
    #final-redesign, #bna-1, #bna-2, #polish-design-intro, #lang-access, #CCnOR, #mid-drive, #context-rate',
    {
      duration: revealDur,
      distance: revealDist,
      interval: revealInter,
    });

  sr.reveal('#reflection', {
    duration: revealDur,
    distance: revealDist,
    viewOffset: { top: -20 },
    interval: revealInter,
  });



})(jQuery); // End of use strict

$(document).ready(loadElements());

function loadElements() {

  let temp = $('#proj-overview-col').height();
  // console.log(temp);
  document.getElementById('proj-overview-img').setAttribute("style", "height:" + temp + "px");
  // imgCode = "<img src='img/iPhone-8-RoseGold-Lyft-Mockup-Left-trbg.png' class='w-100'/>";
  // document.getElementById('proj-overview-img').append(imgCode);


  // Set height for quote carousel
  let qItemGet = $('#q-carousel-get-h').height();
  $('#q-carousel-get-h').height(qItemGet);


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
    "position": "relative",
    // "width": scrollWidth + $('#set-scrn-h').width() + "px",
  });

  // Add screen to page
  document.getElementById('settings-img-container').appendChild(settingsImg);
  // remove placeholder screen
  if (document.getElementById('remove-me')) {
    document.getElementById('remove-me').remove();
  }

  var set_img_contain = document.getElementById('settings-img-container');
  var scrollbar_width = set_img_contain.clientWidth - set_img_contain.offsetWidth + "px";
  set_img_contain.style.right = scrollbar_width;

  // let settingwidth = parseFloat($('#settingsImg').css("width"));
  // console.log(settingwidth);

  console.log("loaded");
}