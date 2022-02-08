const $ = require('jquery');

const breakpoint = 1148;

const isDesktop = () => {
    return $(window).width() >= breakpoint;
}

const isMobile = () => {
    return !isDesktop();
}

module.exports = {
    isDesktop,
    isMobile
}
