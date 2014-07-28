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
    var $project = $('#projects');
    for (var i = 0; i < jSONResult.length; i++) {
        var $img = $('<img/>', {
            src: jSONResult[i].thumbnail,
            onclick: 'getProjectDetails(' + jSONResult[i].id + ');'
        });

        $project.append($img);
    }
    var $details = $('<div/>', {
        'class': 'details',
        style: 'display: none'
    });
    $project.append($details);

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
    if (result.written != null) {
        html += result.written + " | ";
    }
    if (result.lang != null) {
        html += result.lang + " | ";
    }
    if (result.download != null) {
        html += '<a href="' + result.download + '" target="_blank">download</a>' + " | ";
    }
    if (result.online != null) {
        html += '<a href="' + result.online + '" target="_blank">try online</a>' + " | ";
    }
    if (result.source != null) {
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
        onclick: 'closeDetails();'
    });
    $details.data({
        id: result.id
    })

    $details.append($description, $content, $button);
    $details.slideDown(400, function () {
        /*$('html, body').animate({
         scrollTop: $('#projects').offset().top
         }, 500);     */
    });
}


