jQuery(document).ready(function($){
    // $(".silder").owlCarousel({
    //     items: 1,
    //     autoplay: true,
    //     loop: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,

    // });

    // jQuery for sticky - requires no plugin
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0 ) {
            $('.header').addClass('sticky');
        }
        else {
            $('.header').removeClass('sticky');
        }
    });
    /////////////////////////


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(e) {
        var $anchor = $(this);
        var navHeight = $(".header").height();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - navHeight + 1
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    //////////////


    //Nav active with scroll jquery
    $(document).on("scroll", onScroll);

    function onScroll(event){
        var scrollPosition = $(document).scrollTop();

        $('.main-menu a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            var navHeight = $(".header").height();
            if (refElement.position().top <= (scrollPosition + navHeight) && refElement.position().top + refElement.outerHeight() > scrollPosition) {
                $('.main-menu ul li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }  
    ////////////////

    $(window).scroll(function(){
        var scrollbar = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
        scrollbarPercent = ( scrollbar / ( dh-wh )) * 100;
        $('.custom-side-scroll').css('height', scrollbarPercent + '%')
    });

    $(".services").hover(function(){
        if ($(window).width() >= 992) {
          $(this).toggleClass("active");  //Toggle the active class to the area is hovered
        }
    });


    
    $(window).ready(function() {
        var window_width = $(window).width();
      if (window_width < 992){
        $(".services").addClass("active");
      };
      if (window_width < 768){
        $(".single-portfolio img").addClass("disable-animation");
        $(".banner").addClass("banner-bg");
      } else {
        $(".single-portfolio img").removeClass("disable-animation");
        $(".banner").removeClass("banner-bg");
      }
    });

    // Returns true if the specified element has been scrolled into the viewport.
    function isElementInViewport(elem) {
        var $elem = $(elem);

        // Get the scroll position of the page.
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        var elemTop = Math.round( $elem.offset().top );
        var elemBottom = elemTop + $elem.height();

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    // Check if it's time to start the animation.
    function checkAnimation() {
        var $elem = $('.anim');

        // If the animation has already been started
        if ($elem.hasClass('start')) return;

        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('start');
        }
    }

    // Capture scroll events
    $(window).scroll(function(){
        checkAnimation();
    });


    
    // $(window).ready(function() {
    //     $(".portfolio-wrap .row .col:nth-child(6n+1) .single-portfolio").addClass("nth-1");
    //     $(".portfolio-wrap .row .col:nth-child(6n+2) .single-portfolio").addClass("nth-2");
    //     $(".portfolio-wrap .row .col:nth-child(6n+3) .single-portfolio").addClass("nth-3");
    //     $(".portfolio-wrap .row .col:nth-child(6n+4) .single-portfolio").addClass("nth-4");
    //     $(".portfolio-wrap .row .col:nth-child(6n+5) .single-portfolio").addClass("nth-5");
    //     $(".portfolio-wrap .row .col:nth-child(6n+6) .single-portfolio").addClass("nth-6");

    //     // alert($(".portfolio-wrap .row .col").length);

    //     // if ( $(".portfolio-wrap .row .col").length = 6n + 1 ) {
    //     //     alert("6n+1 true");
    //     //     $(".portfolio-wrap .row .col:last-child .single-portfolio").removeClass("nth-1");
    //     //     $(".portfolio-wrap .row .col:last-child .single-portfolio").removeClass("nth-2");
    //     // };
    //     // if ( $(".portfolio-wrap .row .col").length = 6n + 4 ) {
    //     //     alert("6n+4 true");
    //     //     $(".portfolio-wrap .row .col:last-child .single-portfolio").removeClass("nth-4");
    //     //     $(".portfolio-wrap .row .col:last-child .single-portfolio").removeClass("nth-5");
    //     // };

    // });



    $(".sidebar-toggle").click(function() {
        $("section").toggleClass('move');
        $(".sidebar").toggleClass('active');   
        $(".sidebar-toggle").toggleClass('active');   
    });
    $(".sidebar ul li a").click(function() {
        $("section").removeClass('move');
        $(".sidebar").removeClass('active'); 
        $(".sidebar-toggle").removeClass('active');   
    });

    // 'use strict';
    // $(window).on('load', function () {
    //     if ($(".pre-loader").length > 0)
    //     {
    //         $(".pre-loader").fadeOut("slow");
    //     }
    // });

});