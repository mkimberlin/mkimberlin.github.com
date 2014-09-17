function hideCurrentlyActive() {
    'use strict';
    var wasActiveItem = $('.navbar-nav .active'), toHide = $('div.container.active');
    wasActiveItem.removeClass('active');

    toHide.removeClass('active');
    toHide.addClass('hidden');
}

function showDiv(toShow) {
    'use strict';
    toShow.removeClass('hidden');
    toShow.addClass('active');
}

// Start with the appropriate anchor...failure to do this will result in onanchorchange not being called when
// going "back" to the anchor-less start page.
var hash = window.location.hash;
if (hash === '') {
    window.location.hash = "#home";
}

window.onanchorchange = function () {
    'use strict';
    hideCurrentlyActive();

    //Activate appropriate menu item
    var hash = window.location.hash;
    if (hash === '') {
        window.location.hash = "#home";
    }

    $('.navbar-nav li').has('a[href="' + hash + '"]').addClass('active');
    showDiv($(hash));
};

window.onresize = function() {
    if(window.location.hash.indexOf('calendar') > -1 && window.navigator.userAgent.indexOf("MSIE ") < 0) {
        window.location.reload();
    }
}

function collapseMenu() {
    $('.navbar-collapse').collapse('hide');
}

$('.navbar-collapse li:not(.dropdown) a').click(collapseMenu);
