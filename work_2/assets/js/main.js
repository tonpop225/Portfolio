jQuery(document).ready(function($){
    $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

    });

    $(".testimonial").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],

    });

    // $(".team-members").owlCarousel({
    //         items: 3,
    //         autoplay: true,
    //         loop: true,
    //         autoplayTimeout: 3000,
    //         autoplayHoverPause: true,
    //         nav: true,
    //         dots: false,
    //         navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],

    // });

    // $(document).ready(function(){
    //     $("#sticker").sticky({topSpacing:0});
    //   });

    $('li.menu-search').click(function () {
        $('form.search-form').toggleClass('active');
    });
    $('form.search-form').click(function () {
        $('form.search-form').toggleClass('active');
    });
    $( "li.menu-search a" ).click(function( event ) {
      event.preventDefault();
    });


    // ------------------ Circle Progress-----------------------
    $('.cp1').circleProgress({
        value: 0.92,
        fill: {
          color: '#8130AB' // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
        },
    });
    $('.cp2').circleProgress({
        value: 0.75,
        fill: {
          color: '#B25FC5' // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
        },
    });
    $('.cp3').circleProgress({
        value: 0.87,
        fill: {
          color: '#542685' // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
        },
    });
    // ---------------------------------------------------------------


    // This is sticky navbar code for nothing over header navbar----
    // window.addEventListener("scroll", function(){
    //     var header = document.querySelector(".header-content");
    //     header.classList.toggle("sticky", window.scrollY > 0);
    // });
    //============================================================== 

    $('.mobile-menu-button button').click(function () {
        $('.mobile-menu-button').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    });


    $(function() {
        $('a.scroll-down').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });

});
