const $ = require('jquery');
const env = require('./env');

if (env.isMobile()) {
  return;
}

const $leftMenu = $('ul.left-menu');
const trackingAnchors = ['#about', '#grants', '#research'];


const enableHighlight = ($item) => {
  $item.addClass('text-[2.8125rem] text-white');
  $item.removeClass('text-[2.125rem] text-secondary');
  $item.find('img').removeClass('hidden');
  $item.find('span').addClass('text-white-shadow');
}

const removeHighlight = ($item) => {
  $item.removeClass('text-[2.8125rem] text-white');
  $item.addClass('text-[2.125rem] text-secondary');
  $item.find('img').addClass('hidden');
  $item.find('span').removeClass('text-white-shadow');
}

const removeHighlightForAllItems = () => {
  $leftMenu.find('li > a.flex').each(function () {
    removeHighlight($(this))
  });
}

const highlightItem = (hashName) => {
  removeHighlightForAllItems();
  enableHighlight($leftMenu.find("li > a[href=\"" + hashName +"\"]"))
}

function locationHashChanged() {
  let hash = location.hash;
  if (trackingAnchors.indexOf(hash) > -1) {
    highlightItem(hash);
  }
}

const trackingScrollTops = trackingAnchors.reduce((rs, section) => {
  rs[section] = $(section).offset().top + $(section).outerHeight() - 200
  return rs;
}, {});

let currentAnchor = '';
const highlightItemBasedOnScrollTop = function(e) {
  const currentScrollTop = $(document).scrollTop();

  for (let section of trackingAnchors) {
    if (currentScrollTop <= trackingScrollTops[section]) {
      if (currentAnchor !== section) {
        currentAnchor = section
        window.location.hash = currentAnchor;
      }
      return;
    }
  }
}

module.exports = () => {
  window.addEventListener("hashchange", locationHashChanged, false);
  locationHashChanged();

  document.addEventListener('scroll', highlightItemBasedOnScrollTop, false);
}
