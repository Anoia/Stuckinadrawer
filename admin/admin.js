$(document).ready(isReady);

function isReady() {

    if (localStorage.getItem("loggedin") == "true") {
        var $admin = $('#admin');
        $admin.empty();

        $admin.append($('<h1/>', {
            html: "Welcome!"
        }));

        //logout
        var $logout = $('#logInAndOut');
        $logout.html("Logout");

        $logout.click(function () {
            localStorage.removeItem("loggedin");
            window.location.href = "../index_admin.html";
        })

        var $newProject = $('<a/>', {
            html: "Create new Project",
            href: "##",
            click: function () {
                editProject(null);
            }
        });

        $admin.append($('<p/>').append($newProject));

        var $existingProjects = $('<p/>', {
            'id': 'existingProjects'
        })

        $existingProjects.append($('<h3/>', {
            html: "Edit Existing Project:"
        }))

        $admin.append($existingProjects);

    } else {
        $('#logInAndOut').click(function () {
            window.location.href = "../index_admin.html";
        })
    }

    Ajax.getProjectsForAdmin();

}

function adminProjectOverview(jSONResult) {
    var $existingProjects = $('#existingProjects');

    $existingProjects.append($('<br/>'));

    for (var i = 0; i < jSONResult.length; i++) {
        var $p = $('<a/>', {
            href: "#",
            html: jSONResult[i].title,
            onclick: 'Ajax.getProjectByIdForAdmin(' + jSONResult[i].id + ');'
        });

        $existingProjects.append($p);
        $existingProjects.append($('<br/>'));
        $existingProjects.append($('<br/>'));
    }
}


function editProject(jSONResult) {

    var newProject = (jSONResult == null) ? true : false;


    var $admin = $('#admin');
    $admin.empty();

    if (newProject) {
        $admin.append($('<h1/>', {
            html: "New Project!"
        }));
    } else {
        $admin.append($('<h1/>', {
            html: "Edit Project!"
        }));
    }

    //  var editSectionHtml = document.querySelector('link[rel="import"]');
    //  var editSelection = editSectionHtml.import;
    var $formContainer = $('<p/>');
    $formContainer.load("editForm.html", function () {
        $admin.append($formContainer);
        if (!newProject) {
            var result = jSONResult[0];
            console.log(result);
            $('#title').val(result.title);
            $('#lang').val(result.lang);
            $('#written').val(result.written);
            $('#download').val(result.download);
            $('#online').val(result.online);
            $('#source').val(result.source);
            $('#thumbnail').val(result.thumbnail);
            $('#image').val(result.image);
            $('#description').val(result.description);
            $('#content').val(result.content);
            console.log(result.title);

        }

    });


}

function submitProjectData() {
    console.log("test");
    console.log($('#title').val());
}
