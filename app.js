// Option 1 to find elements
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// Option 2 to find elements
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    // JS
    // if (username === ""){
    //     alert("Please write your name.");
    // } else if (username.length > 15){
    //     alert("Your name is too long.")
    // } else {
    //     console.log('Hello', username);
    // }
    console.log('Hello', username);
}

loginButton.addEventListener("click",onLoginBtnClick);