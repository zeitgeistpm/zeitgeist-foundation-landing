const eventRegister = require('./eventRegister');
const header = require('./data/header.json');
const pageLinks = require('./data/pageLinks.json');

module.exports = {
    baseUrl: 'https://koniverse.github.io/',
    baseContext: 'zeitgeist-foundation-landing',
    siteName: 'Zeitgeist Foundation',
    siteDescription: 'Own your future',
    dateTimeFormat: 'ddd, MM/DD/YYYY - HH:mm',
    dateFormat: 'MM/DD/YYYY',
    postUrlStyle: 'POSTS_SLUG',
    locales: ['en'],
    defaultLocale: 'en',
    eventRegister,
    header,
    pageLinks
};
