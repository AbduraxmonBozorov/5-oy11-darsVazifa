

let main=document.querySelector(".main");
let h1=document.querySelector(".main h1");

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
            h1.innerHTML=`Hello  ${element.username}!`;
            main.appendChild(h1);
        }
    });

})