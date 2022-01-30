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

function locationHashChanged() {
  let hash = location.hash;
  if (trackingAnchors.indexOf(hash) > -1) {
    removeHighlightForAllItems();
    enableHighlight($leftMenu.find("li > a[href=\"" + hash +"\"]"))
  }
}

module.exports = () => {
  window.addEventListener("hashchange", locationHashChanged, false);
  locationHashChanged();
}
