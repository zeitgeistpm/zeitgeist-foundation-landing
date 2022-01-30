const $ = require('jquery');
const header = require('./modules/header');
const leftMenu = require('./modules/leftMenu');

$(function () {
    leftMenu();
    // header();

    // window.onload = function () {
    //     const contributeElHeight = $(document.getElementById('contributeEl')).outerHeight();
    //     const footerElHeight = $(document.getElementById('footer')).outerHeight();
    //     // const headerElHeight = $(document.querySelector('header')).outerHeight();
    //     const errorBody = $(document.getElementById('errorBody'));
    //     if (errorBody) {
    //         errorBody.css('min-height', `calc(100vh - (${contributeElHeight}px + ${footerElHeight}px))`);
    //         // errorBody.css('padding-top', `${headerElHeight}px`)
    //     }
    // }
    //
    // window.onresize = function () {
    //     const contributeElHeight = $(document.getElementById('contributeEl')).outerHeight();
    //     const footerElHeight = $(document.getElementById('footer')).outerHeight();
    //     const errorBody = $(document.getElementById('errorBody'));
    //     if (errorBody) {
    //         errorBody.css('min-height', `calc(100vh - (${contributeElHeight}px + ${footerElHeight}px))`);
    //     }
    // }
    //
    // const body = document.body;
    // const scrollUp = "scroll-up";
    // const scrollDown = "scroll-down";
    // const headerHeight = document.querySelector('.header-desktop').offsetHeight;
    // let lastScroll = 0;
    //
    // window.addEventListener("scroll", () => {
    //     const currentScroll = window.pageYOffset;
    //     if (currentScroll <= 0) {
    //         body.classList.remove(scrollUp);
    //         body.classList.remove('scroll');
    //         return;
    //     }
    //
    //     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    //         // down
    //         body.classList.remove(scrollUp);
    //         body.classList.add(scrollDown);
    //         if (currentScroll > headerHeight) {
    //             body.classList.add('scroll');
    //         }
    //     } else if (
    //         currentScroll < lastScroll &&
    //         body.classList.contains(scrollDown)
    //     ) {
    //         // up
    //         body.classList.remove(scrollDown);
    //         body.classList.add(scrollUp);
    //
    //     }
    //     lastScroll = currentScroll;
    // });



});
