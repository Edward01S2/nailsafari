var $ = require("jquery");
var slick = require("slick-carousel");
var slicklb = require("slick-lightbox/dist/slick-lightbox.js");
var waypoints = require("waypoints/lib/noframework.waypoints.js");

$( document ).ready(function() {

    $('#nav-btn').click(function() {
        $('#nav-menu').slideToggle(750);
        $('#nav-menu').toggleClass('hidden');
    });

    $('.tst-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    //Smooth Scrolling

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500);
        }
      }
    });

    //Animations
    // $('.svc-animate').waypoints(function() {
    //     $('.svc-animate').addClass('.slide-in-bottom');
    // }, { offset: '25%'});

    var waypoint = new Waypoint({
        element: document.getElementById('svc-trig'),
        handler: function(direction) {
            $('.svc-animate').addClass('slide-in-bottom');
        },
        offset: '50%'
    })

    var waypoint = new Waypoint({
        element: document.getElementById('footer'),
        handler: function(direction) {
            $('.about-animate').addClass('kenburns-bottom');
        },
        offset: 'bottom-in-view'
    })

    $('.gallery').slickLightbox({
        itemSelector: '> a',
        layouts: {
            closeButton: '<button type="button" class="lightbox-close focus:outline-none"><svg class="h-12 w-12 fill-current text-white hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg></button>',
        },
        slick: {
            prevArrow: '<button class="prev-lb focus:outline-none"><svg class="h-10 w-10 fill-current text-white hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z"/></svg></button>',
            nextArrow: '<button class="next-lb focus:outline-none"><svg class="h-10 w-10 fill-current text-white hover:text-primary"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"/></svg></button>',
        },
    });

});