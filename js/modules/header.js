const $ = require('jquery');

const $body = $('body');
const $mobileHeader = $('header');
const $menuBtn = $mobileHeader.find('.hamburger');
const $mobileMenu = $mobileHeader.find('.mobile-menu');

const toggleMobileMenu = () => {
    $menuBtn.toggleClass('open');
    $mobileMenu.fadeToggle(300);
    $mobileMenu.css('cssText', 'display: flex !important')
    $body.toggleClass('no-scrolling');
    setTimeout(() => {
        $body.toggleClass('position-fixed');
    }, 250)
}

const handleMobileMenuLocalAnchors = () => {
    $mobileMenu.find('.mobile-menu--nav li > a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        const href = $this.attr('href');
        $menuBtn.trigger('click');
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $(href).offset().top - 20
            }, 300);
        }, 300);
    });
}

const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
    handleMobileMenuLocalAnchors();
}

module.exports = () => {
    registerEvents();
}
