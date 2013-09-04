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

function closeDetails() {
    var $details = $('.details');
    $details.slideUp();
    $details.empty();
    $details.data({
        id: null
    })
}
function displayProject(jSONResult) {
    console.log(jSONResult);

    var $details = $('.details');

    var $title = $('<h1/>', {
        "class": "projectHeadline",
        html: jSONResult[0].title
    });
    var $img = $('<img/>', {
        src: jSONResult[0].image
    });
    var $description = $('<p/>', {
        html: jSONResult[0].description
    });
    var $content = $('<p/>', {
        html: jSONResult[0].content
    });

    var $button = $('<button/>', {
        html: "close",
        type: 'button',
        onclick: 'closeDetails();'
    });
    $details.data({
        id: jSONResult[0].id
    })

    $details.append($title, $img, $description, $content, $button);
    $details.slideDown();
}


