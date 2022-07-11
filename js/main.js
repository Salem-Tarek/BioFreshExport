$(function(){

  // Home Page Slider
    $('.owlCarousel-homePage .owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      rtl:true,
      autoplay:false,
      dots:false,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1
        }
      }
    })

  // Product Owl Carousel
    $('.product .owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      rtl:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
      }
    })

  // Adjust The Height Of Some Sections
    var theWindowHeight = $(window).height(),
        theNavbarHeight = $(".navbar").outerHeight(true),
        theFooterHeight = $(".footer").outerHeight(true),
        productSectionHeight = $(".product").outerHeight(true),
        aboutHeight = $('.why-choose-us').outerHeight(true),
        certificateHeight = $('.certificates-parent').outerHeight(true),
        theAllElementsHeightForAbout = theNavbarHeight + theFooterHeight + aboutHeight,
        theAllElementsHeightForProducts = theNavbarHeight + theFooterHeight + productSectionHeight,
        theAllElementsHeightForCertificates = theNavbarHeight + theFooterHeight + certificateHeight

  // Adjust The Height Of Product Section
    if (theWindowHeight > theAllElementsHeightForProducts){
      $(".product").css('height',theWindowHeight - theNavbarHeight - theFooterHeight)
    }else{
      $(".product").css('height','auto')
    }

  // Adjust The Height Of Why Choose Us Section
    if (theWindowHeight > theAllElementsHeightForAbout){
      $(".why-choose-us").css('height',theWindowHeight - theNavbarHeight - theFooterHeight)
    }else{
      $(".why-choose-us").css('height','auto')
    }

  // Adjust The Height Of Certificates
    if (theWindowHeight > theAllElementsHeightForCertificates){
      $(".certificates-parent").css('height',theWindowHeight - theNavbarHeight - theFooterHeight)
    }else{
      $(".certificates-parent").css('height','auto')
    }

  // Adjust The Container Of The navbar
    if (($(window).outerWidth() > 0)  && ($(window).outerWidth() <= 1700)){
      $(".navbar div").first().removeClass().addClass("container-fluid")
    }else{
      $(".navbar div").first().removeClass().addClass("container")
    }

  // AOS Animation
    AOS.init({
// Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    offset: 400, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'linear', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation

  });

})
