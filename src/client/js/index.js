import './contact_me.js'

import pluginsInit from './plugins';
import navInit from './nav';
import smoothScrollInit from './smoothScroll';
import scrollfireInit from './scrollfire';

import '../scss/index.scss'

// import views so they can live-reload during development
if (process.env.NODE_ENV === 'development') {
    // const glob = require('glob')
    // const { resolve } = require('path')
    //
    // glob.sync( '../views/**/*.pug' ).forEach( function( view ) {
    //   require( resolve( view ) );
    // });

    // pages
    require('../../views/pages/index.pug')
    require('../../views/pages/404.pug')

    // partials & sections
    require('../../views/layout.pug')
    require('../../views/partials/head.pug')
    require('../../views/partials/contact.pug')
    require('../../views/partials/footer.pug')
    require('../../views/partials/nav.pug')
    require('../../views/sections/about.pug')
    require('../../views/sections/above-the-fold.pug')
    require('../../views/sections/portfolio.pug')
}

$(document).ready(function() {
    pluginsInit();
    navInit();
    smoothScrollInit();
    scrollfireInit();

    const $overlay = $('#overlay');
    const $menuButton = $('#menuButton');
    const $menu = $('#menu');
    const $contact = $('#contact');

    function hideEverything() {
        $menuButton.removeClass('open');
        $menu.removeClass('revealed');
        $contact.fadeOut(200);
        $overlay.fadeOut(200);
    }

    $overlay.click(hideEverything);

    $('.card-image').each(function() {
        $(this).css('background-image', `url(${$(this).attr('data-png')})`);
    });

    $('.card-image').mouseover(function() {
        $(this).css('background-image', `url(${$(this).attr('data-gif')})`);
    });

    $('.card-image').mouseleave(function() {
        $(this).css('background-image', `url(${$(this).attr('data-png')})`);
    });
});