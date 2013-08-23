$(document).ready(isReady);

function isReady() {
    var page = getURLParameter('page');
    if (displayPage[page]) {
        displayPage[page]();
    } else {
        displayPage['default']();
    }

    //highlight current page
    $('#navbar').find('ul li a').each(function () {
        if (this.href.indexOf(page) != -1) {
            $('li.current').removeClass('current');
            $(this).parent().addClass('current');
        }
    });


}

displayPage = {
    'home': function () {
        console.log("home");
        var id = getURLParameter('id');
        if (jQuery.isNumeric(id)) {
            Ajax.getBlogPostById(id);
        } else {
            Ajax.getBlogContent();
        }
    },
    'projects': function () {
        console.log("projects");
        console.log(getURLParameter('id'));
    },
    'about': function () {
        console.log("about");
    },
    'contact': function () {
        console.log('contact');
    },
    'default': function () {
        this.home();
    }
};

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}




