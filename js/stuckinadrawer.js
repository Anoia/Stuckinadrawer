$(document).ready(isReady);

function isReady() {


    Ajax.getProjectsForOverview();

}

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


function getProjectDetails(id) {
    var $details = $('.details');
    if ($details.data().id == id) {
        hideDetails();
    } else {
        /*
         $details.slideUp(400, function () {
         $details.empty();

         });*/
        Ajax.getProjectById(id);


    }


}
/*
 function closeDetails() {
 var $details = $('.details');
 $details.slideUp(400, function () {
 $details.empty();
 $details.data({
 id: null
 });
 disable_scroll();
 $('html, body').animate({
 scrollTop: $('#projects').offset().top
 }, 300, function(){
 enable_scroll();
 });

 });

 }         */

// functions to dis- and endable scrolling during animations


function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}

function wheel(e) {
    preventDefault(e);
}


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}