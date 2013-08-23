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

    for (var i = 0; i < jSONResult.length; i++) {
        var $project = $('<span/>', {
            "class": "projectOverview"
        });
        var $link = $('<a/>', {
            href: ("index2.html?page=projects&id=" + jSONResult[i].id)
        });
        var $img = $('<img/>', {
            src: jSONResult[i].thumbnail
        });
        $link.append($img);
        $project.append($link);
        $('#content').append($project);
    }

}

function displayProject(jSONResult) {
    console.log(jSONResult);

    var $project = $('<div/>', {
        "class": "project"
    });
    var $title = $('<h1/>', {
        "class": "projectHeadline"
    });
    var $link = $('<a/>', {
        html: jSONResult[0].title,
        href: ("index2.html?page=projects&id=" + jSONResult[0].id)
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
    $title.append($link);
    $project.append($title, $img, $description, $content);
    $('#content').append($project);
}


