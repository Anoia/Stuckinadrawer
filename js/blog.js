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
    $('#content').append(jSONResult);
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


