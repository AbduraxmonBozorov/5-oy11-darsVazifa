

let main=document.querySelector(".main");

document.addEventListener("DOMContentLoaded", () => {
    let url = window.location.href;
    let email = url.split("email=")[1];
    console.log(email);

    function getData() {
        let users = [];
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        }

        return users;
    }

    let users=getData();

    users.forEach(element => {
        if(element.email==email){
            let h1=document.createElement("h1");
            h1.innerHTML=`Hello  ${element.username}!`;
            main.appendChild(h1);
        }
    });

})