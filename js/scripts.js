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
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    arrows: false,
                    dots: true,
                    appendDots: $(".promo_dots")
                  }                  
                }
              ]
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

    // ------------

    if( $(".jobs_slider_2").length > 0 ) {
        $(".jobs_slider_2").not(".slick-initialized").slick({
            dots: true,
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

    if( $(".yand_revs_slider").length > 0 ) {
        $(".yand_revs_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
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

    $(".respBtn").click(function(e) {
      e.preventDefault();
      if( $("#respNav").is(":hidden") ) {
          $("#respNav").fadeIn(300);
          $(".res_bg").fadeIn(300);
          $(this).addClass("active");
          $(".closeNav").addClass("active");
      } else {
          $("#respNav").fadeOut(300);
          $(".res_bg").fadeOut(300);
          $(this).removeClass("active");
          $(".closeNav").removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#respNav").is(":visible") &&
            bodyWidth <= 900) {
                $("#respNav").fadeOut(300);
                $(".respBtn").removeClass("active");
                $(".closeNav").removeClass("active");
                $(".res_bg").fadeOut(300);
        }
    });

    $(".res_bg, .closeNav").click(function(e) {
        e.preventDefault();
        $("#respNav").fadeOut(300);
        $(".respBtn").removeClass("active");
        $(".closeNav").removeClass("active");
        $(".res_bg").fadeOut(300);
    });

    $(".menu_arrow").click(function(e) {
        if(bodyWidth <= 900) {
            e.preventDefault();
            parent = $(this).closest("li");
            subMenu = parent.children(".sub_menu");
            if(subMenu.is(":hidden")) {
                subMenu.slideDown(300);
                $(this).addClass("active");
            } else {
                subMenu.slideUp(300);
                $(this).removeClass("active");
            }
        }
    });

    // ------------------

    $('.beforeAfter').beforeAfter();

    // ------------------
    clickCounter = 0;
    $(".bg_blocks_append .bg_block").each(function() {
        $(".bg_blocks_append .bg_block:eq("+clickCounter+")").clone().prependTo(".info_box");
        $(".info_box .bg_block").css({
            "display" : "block"
        });
        clickCounter++;
    });
    clickCounter = 0;
    $(".info_box").on("click", function(e) {
        e.preventDefault();
        countBgBlocks = parseInt($(".bg_blocks_append").attr("data-countblocks"));
        if(clickCounter >= countBgBlocks) {
            clickCounter = 0;
        }        
        countBgBlocksActive = $(".info_box .bg_block").length;
        if(countBgBlocksActive >= countBgBlocks) {
            $(".info_box .bg_block").remove();
        }
        if($(".info_box .bg_block").length == 0) {
            $(".bg_blocks_append .bg_block:eq("+clickCounter+")").clone().prependTo(".info_box");
            $(".info_box .bg_block").addClass("first");
            $(".info_box .bg_block").fadeIn(300);
        } else {
            $(".info_box .bg_block:eq("+clickCounter+")").removeClass("first");
            $(".bg_blocks_append .bg_block:eq("+clickCounter+")").clone().prependTo(".info_box");
            $(".info_box .bg_block").fadeIn(300);
        }
        clickCounter++;
    });
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

   $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      topCoord = $(document).scrollTop();
      $("body").addClass("fixed");
      $("body").css({
          "top" :  -1 * topCoord + "px",
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").removeClass("fixed");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").attr("style", "");
      $("[data-popup]").fadeOut(300);
      $(".popup_bg").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").removeClass("fixed");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").attr("style", "");      
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");    
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // -----------------

    $(document).on("click", ".checkout_list [data-option-val]",  function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      val = $(this).html();
      text = $(this).attr("data-option-val");
      parent.find(".p_val").html(val);
      parent.find("input[type='hidden']").val(text);
      parent.removeClass("active");
      parent.find("[data-option-val]").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".custom_select .custom_select_title", function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      if(parent.hasClass("active")) {
        parent.removeClass("active");
      } else {
        $(".custom_select").removeClass("active");
        parent.addClass("active");
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".custom_select");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".custom_select").removeClass("active");
      }
    });

    // -----------------

    if($("[type='tel']").length > 0) {
        $("[type='tel']").inputmask({"mask": "+7 (999) 999-99-99"});
    }

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