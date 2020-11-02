'use strict';
$(function () {
    //new $(document).ready
    let body = $('body');
    let $hamburger = $('.hamburger');
    let $overlay = $('.overlay');
    let $phones = $('.phones');

    function  window_size() {
        if ( body.innerWidth() > 767) {
            $phones.appendTo('.header__inner');
        } else {
            $phones.appendTo('.navigation')
        }
    }
    $(window).on('load resize', window_size)

    function toggleMobileMenu() {
        $hamburger
        .toggleClass('is-active')
        .next()
        .toggleClass('active');
        $phones.toggleClass('active');
        $overlay.fadeToggle();
        $('body, html').toggleClass('no-scroll');
    }

    (function showMobileMenu() {
        $hamburger.on('click', function() {
            toggleMobileMenu();
        });
    })();

    (function HideMobileMenu() {
        $overlay.on('click', function() {
            toggleMobileMenu();
        });
    })();
});
