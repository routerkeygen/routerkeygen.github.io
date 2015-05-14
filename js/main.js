/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function displayInterstitial(){
    if (window.mmAPI) {
        window.mmAPI.placeAd({
        containerElementId: 'interstitialContainer',
        apid: '200849',
        placementType: 'interstitial',
        allowLocation: true
    });
    }
}

if (window.mmAPI) {
    var windowSize = window.innerWidth,
        height = 50;
    if (windowSize > 728) {
        windowSize = 728;
        height = 90; 
    } else if ( windowSize > 480 ) {
        windowSize = 480;
        height = 60;
    } else if ( windowSize > 320 ) {
        windowSize = 320;
        height = 50;
    }
    window.mmAPI.placeAd({
        containerElementId: 'aboutAdContainer',
        apid: '200848',
        placementType: 'inline',
        width: windowSize,
        height: height,
        allowLocation: true
    });
    window.mmAPI.placeAd({
        containerElementId: 'downloadAdContainer',
        apid: '200847',
        placementType: 'inline',
        width: windowSize,
        height: height,
        allowLocation: true
    });
    window.mmAPI.placeAd({
        containerElementId: 'contactAdContainer',
        apid: '200846',
        placementType: 'inline',
        width: windowSize,
        height: height,
        allowLocation: true
    });
}