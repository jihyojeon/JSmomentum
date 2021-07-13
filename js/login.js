// // Option 1 to find elements
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// // Option 2 to find elements
// // const loginInput = document.querySelector("#login-form input");
// // const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if (username === ""){
//         alert("Please write your name.");
//     } else if (username.length > 15){
//         alert("Your name is too long.")
//     } else {
//         console.log('Hello', username);
//     }
//     console.log('Hello', username);
// }

// loginButton.addEventListener("click",onLoginBtnClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // Prevent refreshing
    loginForm.classList.add(HIDDEN_CLASSNAME); // hide login form
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //Memorizing
    paintGreetings(username); // call another function
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // show greeting
  }
  
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show login form
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }
