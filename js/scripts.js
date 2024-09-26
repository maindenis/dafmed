function getSidebarScrollParams() {
    if( $(".sidebar_scroll").length > 0 && bodyWidth > 767) {
        filtersCoord = $(document).scrollTop();    
        mapCoord = $("#pricesTempl").offset().top;
        if(filtersCoord >= mapCoord - 20) {            
            $(".sidebar_scroll").addClass("fixed");
            $(".sidebar_scroll").css({
                "top" : 20 + "px",
                "width" : $("#sidebarWrapp").width() + "px",
                "left" : $("#sidebarWrapp").offset().left + "px"
            });
            mapScrollBootmCoord = filtersCoord + $(".sidebar_scroll").height();
            bottomCoord = $("#pricesTempl").offset().top + $("#pricesTempl").height();
            if( mapScrollBootmCoord >= bottomCoord ) {
                $(".sidebar_scroll").addClass("bottom_position");
            } else {
                $(".sidebar_scroll").removeClass("bottom_position");
            }
        } else {
            $(".sidebar_scroll").removeClass("fixed");
            $(".sidebar_scroll").css({
                "top" : 0
            });
        }
    }
}

function  getNavItemParams() {
    var sections = $('.scrollSect')
  , nav = $('#sideNav')
  , nav_height = $('#sideNav a').outerHeight();
  var cur_pos = $(window).scrollTop();  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }    
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
});

$(document).scroll(function() {
    getSidebarScrollParams();
    getNavItemParams();
});

$(document).ready(function() {
    getSidebarScrollParams();
    getNavItemParams();

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
        //  $('.slider_2').on('init', function(event, slick){
        //     index = slick.currentSlide;
        //     slname = $(this).attr("data-slider");
        //     $(".ba_slider[data-slider = '"+slname+"'] .slick-dots li:eq("+index+") button").trigger("click");
        // });

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

    if( $(".slider_4").length > 0 ) {
        $(".slider_4").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 2,
            fade: true,
        });
    }

    // -------------

    if( $(".jobs_slider").length > 0 ) {
        $(".jobs_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            draggable: false
        });
    }

    // -------------

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

    // ------------------

    $(".info_box .bg_block").each(function () {
        counter = 0;        
        $(this).each(function() {
            counter++;   
            $(this).css({
                "z-index" : counter
            });
        });
    });
    lenghtBoxes = $(".bg_block").length;
    counter = 0;
    do{
        $(".bg_block").eq(counter).attr("data-position", lenghtBoxes);
        counter++;
        lenghtBoxes--;
    }while(lenghtBoxes>0);

    // -----------------

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      parent = $(this).closest("ul");
      parent.find("a").removeClass("active");
      $(this).addClass("active");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
          $('html, body').stop().animate({
              'scrollTop': $(hrefAttr).offset().top-100
          }, 500);
      }
    });

    // -----------------

    // if($("#map").length > 0) {
    //     var mapZoom = $("#map").attr("data-zoom");
    //     var lat = $("#map").attr("data-lat");
    //     var long = $("#map").attr("data-long");
    //     ymaps.ready(function () {        
    //         var myMap = new ymaps.Map('map', {
    //             center: [long, lat],
    //             zoom: mapZoom
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         });
    //         myPlacemark1 = new ymaps.Placemark([long, lat], {
    //             hintContent: ''
    //         }, {
    //         });
    //         myMap.geoObjects.add(myPlacemark1);        
    //     });
    // }

});