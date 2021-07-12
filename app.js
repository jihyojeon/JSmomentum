// Option 1 to find elements
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// Option 2 to find elements
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log('Hello', loginInput.value);
}

loginButton.addEventListener("click",onLoginBtnClick);