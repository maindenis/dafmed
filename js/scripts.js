var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        });
    }

    // --------------

    if( $(".ba_slider").length > 0 ) {
        $(".ba_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            draggable: false
        });
    }

    if( $(".slider_2").length > 0 ) {
         $('.slider_2').on('init', function(event, slick){
            index = slick.currentSlide;
            slname = $(this).attr("data-slider");
            $(".ba_slider[data-slider = '"+slname+"'] .slick-dots li:eq("+index+") button").trigger("click");
        });

        $('.slider_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            slickDots = $(this).find(".slick-dots");
            index = parseInt(slickDots.find("button[aria-selected='true']").attr("aria-label"));
            slname = $(this).attr("data-slider");
            $(".ba_slider[data-slider = '"+slname+"'] .slick-dots li:eq("+nextSlide+") button").trigger("click");
        });
        $(".slider_2").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        });
    }

    if( $(".slider_3").length > 0 ) {
        $(".slider_3").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 2,
            variableWidth: true
        });
    }

    if( $(".rev_slider").length > 0 ) {
        $(".rev_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

    if( $(".blog_slider").length > 0 ) {
        $(".blog_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 2,
            variableWidth: true
        });
    }

    $(".rate").each(function() {
        datarate = $(this).attr("data-rate");
        counter = 0;
        $(this).find("li").each(function() {
            counter++;
            if(counter <= datarate) {
                $(this).addClass("active");
            }
        });
    });

    // --------------

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
      }
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ------------------

    $('.beforeAfter').beforeAfter();

});