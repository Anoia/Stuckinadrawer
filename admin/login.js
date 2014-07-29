function submitLoginData() {
    var formData = $('form').serializeArray();
    console.log(formData);
    console.log(formData[0].value + formData[1].value);
    Ajax.login(formData[0].value, formData[1].value)
}

function login(data) {
    console.log("Login: " + data);
    if (data == "true") {
        if (typeof (Storage) !== "undefined") {
            console.log("storage supported");
            localStorage.setItem("loggedin", "true");
            window.location.href = "admin/adminarea.html";

        } else {
            console.log("storage not supported");
        }
    } else {
        //Wrong login
    }

}