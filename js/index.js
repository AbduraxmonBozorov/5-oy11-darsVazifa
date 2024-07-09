
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let button = document.querySelector(".btn");
let form = document.querySelector("form")

function getData() {
    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
}

function validate() {
    if (email.value.length < 5) {
        alert("Email must benn more than 5 characters");
        email.style.outlineColor = "red";
        email.focus();
        return false;
    }

    if (password.value.length < 3) {
        alert("Password must benn more than 3 characters");
        password.style.outlineColor = "red";
        password.focus();
        return false;
    }

    return true;
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('salom');
    let isValid = validate();
    if (!isValid) {
        return;
    }
    let user = {
        email: email.value,
        password: password.value
    };

    let data = getData();
    if (data.length > 0) {
        data.forEach(element => {
            if (element.email != user.email) {
                alert("This email is not registered!");
                window.location.assign(`http://127.0.0.1:5500/registration.html`);
                return;
            } else if (element.email == user.email && element.password == user.password) {
                window.location.assign(`http://127.0.0.1:5500/pages/user.html?email=${user.email}`);
                return;
            } else if (element.email != user.password || element.password != user.password) {
                alert("Email or password error");
                return;
            }
        });

    } else {
        alert("This email is not registred!");
        window.location.assign(`http://127.0.0.1:5500/pages/registration.html`);
    }

    form.reset();
})