const $ = require('jquery');
const env = require('./env');

const $body = $('body');
const $header = $('header');
const $menuBtn = $header.find('.hamburger');
const $mobileMenu = $header.find('.mobile-menu');
const $desktopMenu = $header.find('ul.desktop-menu');
const $logo = $header.find('.logo');
const $leftMenu = $('ul.left-menu');

const toggleMobileMenu = () => {
  $menuBtn.toggleClass('open');
  $mobileMenu.fadeToggle(300);
  $mobileMenu.css('cssText', 'display: flex !important')
  $body.toggleClass('no-scrolling');
  setTimeout(() => {
    $body.toggleClass('position-fixed');
  }, 250)
}

const initMenuItemsEvents = () => {
  $('ul.desktop-menu, ul.mobile-menu--nav, ul.left-menu')
    .find('li > a[href^="#"]')
    .on('click', function (e) {
      e.preventDefault();
      const $this = $(this);
      const href = $this.attr('href');
      const isMobileMenuItem = $this.closest('ul.mobile-menu--nav').length > 0;
      isMobileMenuItem && $menuBtn.trigger('click');

      setTimeout(() => {
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 300);
      }, 300);
    });
}

const showHideDesktopMenu = function () {
  const currentScrollTop = $(document).scrollTop();
  if (env.isMobile() || currentScrollTop > 100) {
    $desktopMenu.fadeOut(100);
  } else {
    $desktopMenu.fadeIn(100);
  }
}

const adjustHeaderHeight = function () {
  $header.css('height', $header.outerHeight());
}

const showHideLogoOnScroll = function () {
  const collideWithLeftMenu = $header.offset().top + $header.outerHeight() - 5 > $leftMenu.offset().top

  if (collideWithLeftMenu && env.isDesktop()) {
    $logo.fadeOut(100);
  } else {
    $logo.fadeIn(100);
  }
}

const registerEvents = () => {
  $menuBtn.on('click', toggleMobileMenu);
  document.addEventListener('scroll', function () {
    showHideDesktopMenu();
    showHideLogoOnScroll();
  });

  window.addEventListener('resize', function () {
    showHideDesktopMenu();
    adjustHeaderHeight();
  });
}

module.exports = () => {
  registerEvents();

  initMenuItemsEvents();
  adjustHeaderHeight();
  showHideDesktopMenu();
}
