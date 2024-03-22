(function ($) {
  var $body = $("body"),
    $doc = $(document),
    $html = $("html"),
    $win = $(window);

  $doc.ready(function () {
    $(".mail-toggle, .close-toggle-newslatter").on("click", function () {
      var closetoggle = $(".close-toggle-newslatter");
      var mailtoggle = $(".mail-toggle");
      if (closetoggle.hasClass("active")) {
        closetoggle.removeClass("active");
        mailtoggle.removeClass("active");
      } else {
        closetoggle.addClass("active");
        mailtoggle.addClass("active");
      }
      $(".newslatter-panel").slideToggle(300);
    });

    $(".help-btn-toggle").on("click", function () {
      $(this).toggleClass("active");
      $(this).next().toggleClass("active");
    });

    $("ul.tabs li").on("click", function () {
      // get the data attribute
      var tab_id = $(this).attr("data-tab");
      // remove the default classes
      $("ul.tabs li").removeClass("current");
      $(".tab-content").removeClass("current");
      // add new classes on mouse click
      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });

    $("ul.newsroom-blog-tabs li").on("click", function () {
      // get the data attribute
      var tab_id = $(this).attr("data-tab");
      // remove the default classes
      $("ul.newsroom-blog-tabs li").removeClass("current");
      $(".newsroom-blog-content").removeClass("current");
      // add new classes on mouse click
      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });

    $("ul.blog-tabs li").on("click", function () {
      // get the data attribute
      var tab_id = $(this).attr("data-tab");
      // remove the default classes
      $("ul.blog-tabs li").removeClass("current");
      $(".blog-content").removeClass("current");
      // add new classes on mouse click
      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });

    $(".brand-list li").on("click", function () {
      // get the data attribute
      var tab_id = $(this).attr("data-tab");
      // remove the default classes
      $(".brand-list li").removeClass("swiper-slide-active");
      $(".brand-content").removeClass("active");
      // add new classes on mouse click
      $(this).addClass("swiper-slide-active");
      $("#" + tab_id).addClass("active");
    });

    $("#slider-front").draggable({
      axis: "x",
      containment: "parent",
      revert: false,
      scrollSpeed: 100,
      drag: function (event, ui) {
        $(".placeholder-circle").addClass("dragging");
        $("#slider-front").addClass("active");
      },
      stop: function (event, ui) {
        if (ui.position.left > 150) {
          $("#slider-front").removeClass("active");
          $("#front-panel").slideUp();
          $("#back-panel").slideDown();
          $(".placeholder-circle").removeClass("dragging");
          $("#slider-back").animate({
            top: "0px",
            left: ui.position.left + 6,
          });
        }
      },
    });

    $("#slider-back").draggable({
      axis: "x",
      containment: "parent",
      revert: false,
      scrollSpeed: 100,
      drag: function (event, ui) {
        $(".placeholder-circle").addClass("dragging");
        $("#slider-back").addClass("active");
      },
      stop: function (event, ui) {
        $("#slider-back").removeClass("active");
        $(".placeholder-circle").removeClass("dragging");
        $("#back-panel").slideUp();
        $("#front-panel").slideDown();
        $("#slider-front").animate({
          top: "0px",
          left: "0px",
        });
      },
    });
  });

  $doc.on("click", "[data-open-ask-an-expert]", (event) => {
    event.preventDefault();
    event.stopPropagation();

    var askAnExpert = $("[data-ask-an-expert-popup]"),
      modalContent = askAnExpert.find(".outlet-popup-content"),
      url;
    $body.addClass("ask-an-expert-show");
  });

  $doc.on(
    "click",
    "[data-close-ask-an-expert], .background-overlay",
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      $body.removeClass("ask-an-expert-show");
      $(".sidebar-search-panel").removeClass("active");
      $body.removeClass("open-search-panel");
    }
  );

  $doc.on("click", ".search-toggle-btn", (event) => {
    event.preventDefault();
    $(".sidebar-search-panel").addClass("active");
    $body.addClass("open-search-panel");
  });

  $doc.on("click", ".search-panel-close", (event) => {
    event.preventDefault();
    $(".sidebar-search-panel").removeClass("active");
    $body.removeClass("open-search-panel");
  });

  $doc.on("click", ".collection-toggle-btn", (event) => {
    event.preventDefault();
    $(".collection-sidebar-panel").addClass("active");
    $body.addClass("open-collection-panel");
  });

  $doc.on("click", ".collection-panel-close", (event) => {
    event.preventDefault();
    $(".collection-sidebar-panel").removeClass("active");
    $body.removeClass("open-collection-panel");
  });

  $doc.on("click", ".account-toggle-btn", (event) => {
    event.preventDefault();
    $(".account-sidebar-panel").addClass("active");
    $body.addClass("open-account-panel");
  });

  $doc.on("click", ".account-panel-close", (event) => {
    event.preventDefault();
    $(".account-sidebar-panel").removeClass("active");
    $body.removeClass("open-account-panel");
  });

  $doc.on("click", ".drop-down .selected a", (event) => {
    event.preventDefault();
    console.log("click");
    $(".drop-down .options ul").toggle();
  });

  //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
  $(".drop-down .options ul li a").click(function () {
    var text = $(this).html();
    $(".drop-down .selected a span.slect-text").html(text);

    $(".drop-down .options ul").hide();
  });

  var currentvalue = $('a[select="selected"]').data("link");
  $(".drop-down .selected a span.slect-text").html(currentvalue);

  //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
  $doc.bind("click", function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("drop-down"))
      $(".drop-down .options ul").hide();
  });




  $doc.on("click", ".open_mobile_nav", (event) => {
    event.preventDefault();
    $(this).addClass("active");
    $body.addClass("menu_open");
  });

  $doc.on("click", ".background-overlay, .mobile-menu-close", (event) => {
    event.preventDefault();
    $body.removeClass("menu_open");
  });



  $doc.on('click', '[data-mobile-menu-tab]', (event) => {
    event.preventDefault();
    event.stopPropagation();

    var tabItem = event.currentTarget.closest('li'),
        tabTarget = event.currentTarget.dataset.target;

    if(!tabItem.classList.contains('is-active')){

        document.querySelector('[data-navigation-tab-mobile]').querySelectorAll('li').forEach((element) =>{
            if(element != tabItem){
                element.classList.remove('is-active');
            } else {
                element.classList.add('is-active');

                document.querySelectorAll('[id^="MenuMobileListSection-"]').forEach((tab) =>{
                    if(tab.getAttribute('id') == tabTarget) {
                        tab.classList.remove('is-hidden');
                        tab.classList.add('is-visible');
                    } else {
                        tab.classList.remove('is-visible');
                        tab.classList.add('is-hidden');
                    }
                });
            }
        });
    }
});


$body.on('click', '.site-nav-mobile .list-menu-mobile .menu_mobile_link', function (e) {
  if(!e.currentTarget.classList.contains('list-menu__item--end')){
      e.preventDefault();
      e.stopPropagation();
      var $target = $(this);
      var $parent = $target.parent();
      var $menuDislosure1 = $target.parent().find('ul.list-menu--disclosure-1');

      $parent.removeClass('is-hidden').addClass('is-open').removeClass('d-none');
      $menuDislosure1.off('transitionend.toggleMenuLink1').on('transitionend.toggleMenuLink1', () => {
          if ($parent.hasClass('is-open') && !$parent.hasClass('is-hidden') && !$parent.hasClass('d-none')) {
              // $parent.addClass('d-none')
              $parent.siblings().removeClass('is-open').addClass('is-hidden').removeClass('d-none');
          }
      })


  }
});

$body.on('click', '.site-nav-mobile .list-menu-mobile .menu_mobile_link_2', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $target = $(this);
  var $target = $(this);
  var $parent = $target.parent().parent();
  var $menuDislosure2 = $target.parent().find('ul.list-menu--disclosure-2');
  var $parentToScroll = $target.parent().parent().parent().parent().parent().parent();

  $parent.removeClass('is-hidden').addClass('is-open').removeClass('d-none');
  $menuDislosure2.off('transitionend.toggleMenuLink2').on('transitionend.toggleMenuLink2', () => {
      if ($parent.hasClass('is-open') && !$parent.hasClass('is-hidden') && !$parent.hasClass('d-none')) {
          $parent.addClass('d-none')
          $parent.siblings().removeClass('is-open').addClass('is-hidden').removeClass('d-none');
          $parentToScroll.animate({
              scrollTop: 0
          }, 0);
      }
  })

 

  if($('.menu-dropdown').hasClass('megamenu_style_4') || $('.menu-dropdown').hasClass('megamenu_style_1')){
      $target.parents('.menu-dropdown').animate({
          scrollTop: 0
      }, 0);
  }

  $target.parents('.menu-dropdown').addClass('is-overflow');
});

$body.on('click', '.nav-title-mobile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $target = $(this),
      $parentLv1 = $target.parent().parent().parent().parent('.is-open'),
      $parentLv2 = $target.parent().parent().parent('.is-open'),
      $parentLv3 = $target.parent().parent('.is-open');

  $parentLv1.siblings().removeClass('is-hidden');
  $parentLv1.removeClass('is-open').removeClass('d-none');
  $parentLv2.siblings().removeClass('is-hidden');
  $parentLv2.removeClass('is-open').removeClass('d-none');
  $parentLv3.siblings().removeClass('is-hidden');
  $parentLv3.removeClass('is-open').removeClass('d-none');
  $('.menu-dropdown').removeClass('is-overflow');
});


  // const swiperElements = document.querySelectorAll('.tab-content .swiper');

  // swiperElements.forEach(swiperElement => {

  //   console.log(swiperElement.dataset);

  //   const swiper = new Swiper(swiperElement, {
  //     speed: 300,
  //     // Navigation arrows
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     }
  //   });
  // });

  // $('.product__media-list .product__media img').elevateZoom({
  //   zoomType: "inner",
  //   cursor: "crosshair",
  //   zoomWindowFadeIn: 500,
  //   zoomWindowFadeOut: 750
  // });

  $(".product-expanding-card-header").first().addClass("active");

  // Show First Info

  $(".expanding-card-item-container").first().show().animate({
    width: "85%",
  });

  // Show Info On Click

  $(".product-expanding-card-header").click(function () {
    if (!$(this).hasClass(".active")) {
      $(".product-expanding-card-header").removeClass("active");
      $(this).addClass("active");
      $(this)
        .prev()
        .show()
        .animate({
          width: "90%",
        })
        .siblings(".expanding-card-item-container")
        .animate(
          {
            width: 0,
          },
          function () {
            $(this).hide();
          }
        );
    }
  });

  $(".expanding-card-faq-item")
    .last()
    .find(".accordain-heading")
    .addClass("active");
  $(".expanding-card-faq-item").last().find(".accordain-text").slideDown();
  $(".accordain-heading").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".accordain-text").slideUp();
      $(this).removeClass("active");
    } else {
      $(".accordain-text").slideUp();
      $(".accordain-heading").removeClass("active");
      $(this).siblings(".accordain-text").slideToggle();
      $(this).toggleClass("active");
    }
  });

  $(".expanding-card-item-mobile")
    .first()
    .find(".product-expanding-card-head")
    .addClass("active");
  $(".expanding-card-item-mobile")
    .first()
    .find(".expanding-card-item-accordion")
    .slideDown();
  $(".product-expanding-card-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".expanding-card-item-accordion").slideUp();
      $(this).removeClass("active");
    } else {
      $(".expanding-card-item-accordion").slideUp();
      $(".product-expanding-card-head").removeClass("active");
      $(this).siblings(".expanding-card-item-accordion").slideToggle();
      $(this).toggleClass("active");
    }
  });

  $(".login__forgot-btn").on("click", function () {
    $(".login__reset-panel").slideUp();
    $(this)
      .parents(".account-login-form")
      .find(".login__reset-panel")
      .slideDown();
    $(this).parents(".account-login-form").find(".login__form-panel").slideUp();
  });

  $(".login__create-panel-btn").on("click", function () {
    $(this)
      .parents(".account-login-form")
      .find(".login__form-panel")
      .slideDown();
    $(this).parents(".account-login-form").find(".register__form").slideUp();
  });

  $(".login__create-btn").on("click", function () {
    $(this).parents(".account-login-form").find(".register__form").slideDown();
    $(this).parents(".account-login-form").find(".login__form-panel").slideUp();
  });

  $(".login__create-cancel").on("click", function () {
    $(this)
      .parents(".account-login-form")
      .find(".login__reset-panel")
      .slideUp();
    $(this)
      .parents(".account-login-form")
      .find(".login__form-panel")
      .slideDown();
  });



  if ( $(window).width() < 767 ) {
    $(window).scroll(function() {

      var default_btn = $("#default-button");
      if(default_btn.length > 0){

     
  
        var bottom_of_element = default_btn.offset().top + default_btn.outerHeight();

        var top_of_screen = $(window).scrollTop();
    
        if (top_of_screen < bottom_of_element){
            // the element is visible, do something
            $("body").removeClass('show-sticky');
            // $("#default-button").show();
            $("#sticky-buttons").css('display','none');
            
        } else {
            $("body").addClass('show-sticky');
            // $("#default-button").hide();
            $("#sticky-buttons").css('display','block');
        }

      }
    }); 
}




})(jQuery);

$(document).ready(function () {
  $(".mm_heading-item").on("click", function () {
    // $(this).next().slideDown();
    var submenu = $(this).next();
    var arrow = $(this).find("span.arrow-icon");
    if (submenu.is(":visible")) {
      submenu.slideUp();
      arrow.removeClass("active");
    } else {
      arrow.addClass("active");
      submenu.slideDown();
    }
  });
});

$(document).on("click", ".sidebar__search .search__input", (event) => {
  event.preventDefault();

  if (!$(this).val()) {
    $(this)
      .closest(".search__form")
      .find(".search__modal")
      .removeClass("search__modal--hidden");
    $(this)
      .parents(".sidebar__search")
      .find(".header__overlay ")
      .addClass("visible");
  }
});

$(document).on("click", ".sidebar__search .header__overlay", (event) => {
  event.preventDefault();

  $(this)
    .parents(".sidebar__search")
    .find(".search__modal")
    .addClass("search__modal--hidden");
  $(this)
    .parents(".sidebar__search")
    .find(".header__overlay ")
    .removeClass("visible");
});

$(".sidebar__search .search__input").keyup(function () {
  $(this)
    .closest(".search__form")
    .find(".search__modal")
    .addClass("search__modal--hidden");
  $(this)
    .parents(".sidebar__search")
    .find(".header__overlay ")
    .removeClass("visible");
});

// offer__slider

var swiper = new Swiper(".offer__slider", {
  slidesPerView: "auto",
  paginationClickable: true,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".promo__slider", {
  slidesPerView: "auto",
  paginationClickable: true,
  spaceBetween: 10,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".brand-slider", {
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".top_collection__slider", {
  slidesPerView: 4,
  paginationClickable: true,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".top_product__slider", {
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$("input#newslatter").change(function () {
  var ischecked = $(this).is(":checked");
  if (!ischecked) {
    $(".cart__checkout-button").prop("disabled", true);
  } else {
    $(".cart__checkout-button").removeAttr("disabled");
  }
});

// CartDrawer-Checkout

// $(document).on('click', '#checkout_button', () => {

//   $('.newsletter-hidden-form').submit();
//   $("#CartDrawer-Checkout").trigger('click');
//   // console.log("cehcked___");
// });




var imageslide = document.querySelector(".pc_img_swiper");
var detailslide = document.querySelector(".pc_details_swiper");

var imageslide = new Swiper(".pc_img_swiper", {
  slidesPerView: 3,
  paginationClickable: true,
  centeredSlides: true,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    359: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      centeredSlides: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 200,
    },
    1024: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 200,
    },
    1440: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 200,
    },
  },
});

var detailslide = new Swiper(".pc_details_swiper", {
  slidesPerView: "auto",
  paginationClickable: true,
  spaceBetween: 0,
  loop: false,
  breakpoints: {
    359: {
      centeredSlides: false,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      centeredSlides: true,
      loop: true
    },
    1024: {
      loop: true
    },
    1440: {
      loop: true
    },
  },
});

imageslide.controller.control = detailslide;
detailslide.controller.control = imageslide;




var init = false;
var swiperSlider;
function ingredientSlider() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let desktop = window.matchMedia('(min-width: 768px)');

   if(mobile.matches) {
    if (!init) {
      init = true;
      swiperSlider = new Swiper(".product-ingredient-Slider", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });
    }
    else if(desktop.matches) {
      swiperSlider.destroy();
    init = false;
  }
}

}


ingredientSlider();

window.addEventListener('resize', function() {
  ingredientSlider();
});








$('.js-show-more').click(function (e) {
  e.preventDefault();
  $(this).siblings('input').removeClass('hidden');
  $(this).siblings('label').removeClass('hidden');
  $(this).remove();

});





var prouductSelector = $('.js-selector .select__select');

prouductSelector.each(function (index) {

  $(this).on('change', function() {

    const parent = $(this).parents('variant-selects');



    var product_encodedObject = parent.find('script[type="application/json"]').text();
    var variants = JSON.parse(product_encodedObject);

    var color = $(this).parents('.js-color-swatches-wrapper').find(".js-color-swatches input[type='radio']:checked").val();

    
    // console.log("color", color);

    let userSelectValues = [...variants];

    userSelectValues = [color];
    userSelectValues.push(this.value);

    let matchedVariants = variants.find(variant => {
          let match = true;
              
          for (let i = 0; i < userSelectValues.length; i++) {
              if (userSelectValues.indexOf(variant.options[i]) == -1) {
                  match = false;
                  break;
              }
          }
          
          return match;
      });

      console.log(matchedVariants.id);

      var form =  $(this).parents('.js-color-swatches-wrapper').find('form'); 
      form.find('input[name="id"]').val(matchedVariants.id);

      var  price_html  = '<dl><div class="price__regular"><dt>	<span class="visually-hidden visually-hidden--inline">Regular price</span></dt><dd><span class="price-item price-item--regular">' + `${window.theme.symbol}${(matchedVariants.price / 100).toFixed(2)}`+'</span></dd></div><div class="price__sale"><dt class="price__compare"><span class="visually-hidden visually-hidden--inline">Regular price</span></dt><dd class="price__compare"><s class="price-item price-item--regular"></s></dd><dt><span class="visually-hidden visually-hidden--inline">Sale price</span></dt><dd><span class="price-item price-item--sale">'+ `${window.theme.symbol}${(matchedVariants.price / 100).toFixed(2)}`+'</span></dd></div><dl class="unit-price caption hidden"><dt class="visually-hidden">Unit price</dt><dd><span></span><span aria-hidden="true">/</span><span class="visually-hidden">&nbsp;per&nbsp;</span><span></span></dd></dl></dl>'



      if(matchedVariants.compare_at_price > matchedVariants.price ){
      
         price_html = '<dl><div class="price__regular"><dt><span class="visually-hidden visually-hidden--inline">Regular price</span></dt> <dd> <span class="price-item price-item--regular">' + `${window.theme.symbol}${(matchedVariants.price / 100).toFixed(2)}`+'</span></dd> </div><div class="price__sale"><dt class="price__compare"><span class="visually-hidden visually-hidden--inline">Regular price</span></dt><dd class="price__compare"> <s class="price-item price-item--regular">'+`${window.theme.symbol}${(matchedVariants.compare_at_price / 100).toFixed(2)}`+'</s></dd><dt> <span class="visually-hidden visually-hidden--inline">Sale price</span></dt><dd> <span class="price-item price-item--sale">'+`${window.theme.symbol}${(matchedVariants.price / 100).toFixed(2)}`+'</span></dd></div><dl class="unit-price caption hidden"> <dt class="visually-hidden">Unit price</dt> <dd>    <span></span> <span aria-hidden="true">/</span><span class="visually-hidden">&nbsp;per&nbsp;</span><span> </span>  </dd> </dl></dl>'
      
        }


        $(this).parents('.js-color-swatches-wrapper').find('.price').html(price_html);

      // console.log(price_html);







    });

});



var priec = 123;

console.log("treee", window.theme.symbol);


