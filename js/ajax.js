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

    login: function (username, password) {
        $.ajax({
            url: '../backend/backend.php',
            data: {
                request: 'login',
                username: username,
                password: password
            },
            type: 'POST',
            dataType: 'text',
            success: login,
            error: Ajax.displayError
        });
    },

    getProjectsForAdmin: function () {
        $.ajax({
            url: '../backend/backend.php',
            data: {
                request: 'getProjectsForOverview'
            },
            type: 'GET',
            dataType: 'json',
            success: adminProjectOverview,
            error: Ajax.displayError
        });
    },

    getProjectByIdForAdmin: function (id) {
        $.ajax({
            url: '../backend/backend.php',
            data: {
                request: 'getProjectById',
                id: id
            },
            type: 'GET',
            dataType: 'json',
            success: editProject,
            error: Ajax.displayError
        });
    },

    submitNewProject: function (data) {
        data.request = 'submitNewProject';
        $.ajax({
            url: '../backend/backend.php',
            data: data,
            type: 'POST',
            dataType: 'text',
            success: submitted,
            error: Ajax.displayError
        });
    },

    submitChangesToProject: function (data) {
        data.request = 'submitChangesToProject';
        $.ajax({
            url: '../backend/backend.php',
            data: data,
            type: 'POST',
            dataType: 'text',
            success: submitted,
            error: Ajax.displayError
        });

    },

    deleteProject: function (id) {
        $.ajax({
            url: '../backend/backend.php',
            data: {
                request: 'deleteProject',
                id: id
            },
            type: 'POST',
            dataType: 'text',
            success: submitted,
            error: Ajax.displayError
        });
    },

    displayError: function (xhr, status) {
        console.log('Ajax error!');
        console.log(status);
        console.log(xhr);
    }

}