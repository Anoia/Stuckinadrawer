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
        closeDetails();
    } else {

        $details.slideUp(400, function () {
            $details.empty();
            Ajax.getProjectById(id);
        });


    }


}

function closeDetails() {
    var $details = $('.details');
    $details.slideUp(400, function () {
        $details.empty();
        $details.data({
            id: null
        });
        /*
         $('html, body').animate({
         scrollTop: $('#projects').offset().top
         }, 400);*/

    });

}



