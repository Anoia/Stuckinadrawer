function submitLoginData() {
    var formData = $('form').serializeArray();
    console.log(formData);
    console.log(formData[0].value + formData[1].value);
    Ajax.login(formData[0].value, formData[1].value)
}

function login(data) {
    console.log("Login: " + data);
}