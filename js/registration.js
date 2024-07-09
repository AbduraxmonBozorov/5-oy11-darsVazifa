let form=document.querySelector("form");
let username=document.querySelector("#username");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let button=document.querySelector(".btn");

function getData() {
    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
}

function validate(){
    if(username.value.length<3){
        alert("Username must been more than 3 characters");
        username.style.outlineColor="red";
        username.focus();
        return false;
    }
    if(email.value.length<3){
        alert("Username must been more than 3 characters");
        username.style.outlineColor="red";
        username.focus();
        return false;
    }
    if(password.value.length<3){
        alert("Username must been more than 3 characters");
        username.style.outlineColor="red";
        username.focus();
        return false;
    }

    return true;
}


button && button.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log('salom');
    isValid=validate();
    if(!isValid){
        return ;
    }
    
    let user={
        username: username.value,
        email: email.value,
        password: password.value
    }

    let users=getData();

   if(users.length>0){
    users.forEach(element => {
        if(element.email=user.email){
            alert("This email is already exist");
            window.location.assign(`http://127.0.0.1:5500/index.html`);
            return ;
        }
    });
   }

   users.push(user);
   localStorage.setItem("users", JSON.stringify(users));
   window.location.assign(`http://127.0.0.1:5500/pages/user.html?email=${user.email}`);

   form.reset();

})