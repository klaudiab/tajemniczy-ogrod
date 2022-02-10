$(document).ready(function() {

var hamburger = $('.hamburger');
var nav = $('.navigation');

hamburger.on('click', function (event) {
    hamburger.toggleClass('hamburger--active');
    nav.toggleClass('navigation--active');

    if ($('.navigation').hasClass('navigation--active')) {
        console.log('fsdfds');
        $('header').css('background', '#6bca0c');
    }

    else {
        $('header').css('background', 'transparent');
    }
});

$('.alternating_row_gallery').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    items: 1
});

var headerPosition = $('.about_us_header').outerHeight();
var header = $('header');
var headerHeight = $('header').outerHeight();

$(window).scroll(function () {
    docPosition = $(document).scrollTop();

    if (docPosition > headerPosition - 2*headerHeight) {
        header.css('background', '#508b08');
        if ($('.navigation').hasClass('navigation--active')) {
            $('header').css('background', '#6bca0c');
        }
    }

    else {
        header.css('background', 'transparent');
        if ($('.navigation').hasClass('navigation--active')) {
            $('header').css('background', '#6bca0c');
        }
    }
});

function initVideoPopup() {
     
if ($('.popup_video_bttn').length) {

     $('body').append(
         '<div id="video_popup" class="hidden"><div class="video_popup_inner"><div class="popup_content "><div class="popup_content_inner"><button class="close"><span>&times;</span></button><div class="player"><div class="player_inner"><div class="loader_spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div></div></div></div></div>'
         );
         
         var popup = $('body').find('#video_popup');
         
         function showPupup() {
             popup.stop().fadeIn(300, function () {
                 popup.removeClass('hidden');
             });
         }
         
         function closePupup() {
             popup.stop().fadeOut(300, function () {
                 popup.addClass('hidden');
                 popup.find('.player_inner iframe').remove();
             });
         }
         
         $('.popup_video_bttn').on('click', function (event) {
             var videoSrc = $(this).attr('data-video');
             console.log(videoSrc);
             popup.find('.player_inner').append(videoSrc);
             showPupup();
            });
            
            $('.watch').on('click', function (event) {
                $( ".popup_video_bttn" ).trigger( "click" );
            });
            
            $('#video_popup button.close').on('click', function (event) {
                closePupup();
            });
            
            $(document).on('click', function (e) {
                if (!$(e.target).parents('#video_popup .popup_content').length && !popup.hasClass('hidden')) {
                    closePupup();
                }
            });
            
            $(document).keyup(function (e) {
                if (e.keyCode === 27 && !popup.hasClass('hidden')) {
                    closePupup();
                }
            });
        }
    }
    initVideoPopup();
});