const $ = require('jquery');
const env = require('./env');

const $body = $('body');
const $header = $('header');
const $menuBtn = $header.find('.hamburger');
const $mobileMenu = $header.find('.mobile-menu');
const $desktopMenu = $header.find('ul.desktop-menu');

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

const showHideDesktopMenu = function () {
    const currentScrollTop = $(document).scrollTop();
    if (env.isMobile() || currentScrollTop > 0) {
        $desktopMenu.fadeOut(100);
    } else {
        $desktopMenu.fadeIn(100);
    }
}

const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
    handleMobileMenuLocalAnchors();
    document.addEventListener('scroll', showHideDesktopMenu);
    window.addEventListener('resize', showHideDesktopMenu);
}

module.exports = () => {
    registerEvents();
}
