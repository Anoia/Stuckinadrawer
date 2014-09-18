function displayBlogContent(jSONResult) {
    for (var i = 0; i < jSONResult.length; i++) {
        var $blogPost = $('<div/>', {
            "class": "blogPost"
        });
        var $title = $('<h1/>', {
            "class": "blogHeadline"
        });
        var $link = $('<a/>', {
            html: jSONResult[i].title,
            href: ("index2.html?page=home&id=" + jSONResult[i].id)
        });
        var $content = $('<p/>', {
            html: jSONResult[i].content
        });
        $title.append($link);
        $blogPost.append($title, $content);
        $('#content').append($blogPost);
    }
}

function displayBlogPost(jSONResult) {
    var $blogPost = $('<div/>', {
        "class": "blogPost"
    });
    var $title = $('<h1/>', {
        "class": "blogHeadline"
    });
    var $link = $('<a/>', {
        html: jSONResult[0].title,
        href: ("index2.html?page=home&id=" + jSONResult[0].id)
    });
    var $content = $('<p/>', {
        html: jSONResult[0].content
    });
    $title.append($link);
    $blogPost.append($title, $content);
    $('#content').append($blogPost);
}

function displayProjectOverview(jSONResult) {
    console.log(jSONResult);
    var $project = $('#projectOverview');
    for (var i = 0; i < jSONResult.length; i++) {
        var $img = $('<img/>', {
            src: jSONResult[i].thumbnail,
            onclick: 'getProjectDetails(' + jSONResult[i].id + ');'
        });

        $project.append($img);
    }
    var $details = $('<div/>', {
        'class': 'details',
        style: 'display: none;'
    });
    $('#projects').append($details);

}


function displayProject(jSONResult) {
    var result = jSONResult[0];

    var $details = $('.details');

    //title
    var $title = $('<h1/>', {
        "class": "projectHeadline",
        html: result.title
    });

    $details.append($title);

    //info-link bar
    var html = "";
    if (result.written != null && result.written !== "") {
        html += result.written + " | ";
    }
    if (result.lang != null && result.lang !== "") {
        html += result.lang + " | ";
    }
    if (result.download != null && result.download !== "") {
        html += '<a href="' + result.download + '" target="_blank">download</a>' + " | ";
    }
    if (result.online != null && result.online !== "") {
        html += '<a href="' + result.online + '" target="_blank">try online</a>' + " | ";
    }
    if (result.source != null && result.source !== "") {
        html += '<a href="' + result.source + '" target="_blank">view source</a>' + " | ";
    }

    html = html.substring(0, html.length - 3);

    var $bar = $('<p/>', {
        html: html,
        align: 'center'
    })

    $details.append($bar);


    //img
    if (result.image != null) {
        var $img = $('<img/>', {
            src: result.image
        });
        $details.append($img);
    }


    //descr
    var $description = $('<p/>', {
        html: result.description,
        "class": "description"
    });

    //content
    var $content = $('<p/>', {
        html: result.content
    });


    //close
    var $button = $('<button/>', {
        html: "close",
        type: 'button',
        onclick: 'hideDetails();'
    });
    $details.data({
        id: result.id
    })

    $details.append($description, $content, $button);

    /*
     disable_scroll();
     $details.slideDown(300, function () {
     $('html, body').animate({
     scrollTop: $('.details').offset().top
     }, 300, function(){
     enable_scroll();
     });
     });   */

    showDetails();
}

function showDetails() {
    var $details = $('.details');
    $details.fadeIn(400);
    $details.scrollTop(0);
    $('.detailsBackground').fadeIn(400);
    $('body').css('overflow', 'hidden');

}

function hideDetails() {
    $('body').css('overflow', 'auto');
    $('.detailsBackground').fadeOut(400);
    var $details = $('.details');
    $details.fadeOut(400, function () {
        $details.empty();
        $details.data({
            id: null
        });
    });


}


