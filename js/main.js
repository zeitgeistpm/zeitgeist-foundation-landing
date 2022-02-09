const $ = require('jquery');
const header = require('./modules/header');
const leftMenu = require('./modules/leftMenu');

$(function () {
  leftMenu();
  header();
});
