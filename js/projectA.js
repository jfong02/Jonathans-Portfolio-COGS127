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
        $("#mainNav").addClass("navbar-shrink");
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
  
  // $('.dropdown-menu').on("click",'.dropdown-item',function() {
  //   $("#defaultOpen").removeAttr("id");
  //   $("btn.tablinky").attr('id', 'defaultOpen');
  //   $("#defaultOpen").click();
  // })

  var queryParams = new URLSearchParams(window.location.search);
  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var projectNum = queryParams.get('num');
  console.log('query for', projectNum);

  if (projectNum == 0 || projectNum == null) {
    // compile the template
    var source = $("#tabDisplay1").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#defaultDisplay");

    var curHtml = template(projectNum);
		parentDiv.append(curHtml);
  }
  else if (projectNum == 1) {
    // compile the template
    var source = $("#tabDisplay2").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#defaultDisplay");

    var curHtml = template(projectNum);
		parentDiv.append(curHtml);
  }
  else {
    alert('Search settings incorrect. Please reload the page or try again later');
  }



  
  function openPage(pageName, elmnt, color) {
      // Hide all elements with class="tabcontent" by default */
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      // Remove the background color of all tablinks/buttons
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
      }

      // Show the specific tab content
      document.getElementById(pageName).style.display = "block";
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.animation = '';
      }
            
      // Add the specific color to the button used to open the tab content
      if (elmnt !='')
        elmnt.style.backgroundColor = color;
  }

  //For projects via navbar
  function projectnavA() {
    $('.pA').css('background-color', 'rgb(43, 68, 207)');
    setnum0();
  }
  function projectnavB() {
    $('.pB').css('background-color', 'rgb(43, 68, 207)');
    setnum1();
  }
  // function projectnavC() {
  //   $('.pC').css('background-color', 'rgb(43, 68, 207)');
  // }

  function setnum0() {
    queryParams.set('num',0);
  }

  function setnum1() {
    queryParams.set('num',1);
  }


  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  