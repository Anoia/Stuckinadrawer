Ajax = {
    getBlogContent: function () {
        $.ajax({
            url: 'backend/backend.php',
            data: {
                request: 'getAllBlogPosts'
            },
            type: 'GET',
            dataType: 'json',
            success: displayBlogContent,
            error: Ajax.displayError
        });
    },

    getBlogPostById: function (id) {
        console.log('get Blogpost by id: ' + id);
        $.ajax({
            url: 'backend/backend.php',
            data: {
                request: 'getBlogPostById',
                id: id
            },
            type: 'GET',
            dataType: 'json',
            success: displayBlogPost,
            error: Ajax.displayError
        });
    },

    getProjectsForOverview: function () {
        $.ajax({
            url: 'backend/backend.php',
            data: {
                request: 'getProjectsForOverview'
            },
            type: 'GET',
            dataType: 'json',
            success: displayProjectOverview,
            error: Ajax.displayError
        });
    },

    getProjectById: function (id) {
        console.log('get Project by id: ' + id);
        $.ajax({
            url: 'backend/backend.php',
            data: {
                request: 'getProjectById',
                id: id
            },
            type: 'GET',
            dataType: 'json',
            success: displayProject,
            error: Ajax.displayError
        });
    },

    displayError: function (xhr, status) {
        alert('Ajax error!');
        console.log(status);
        console.log(xhr);
    }

}