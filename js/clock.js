const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //const hours = String(date.getHours()).padStart(2, "0"); // Zeropadding
  let hours = date.getHours();
  if (hours>12){
    hours = hours - 12;
  }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  //const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`//:${seconds}`; // BACKTICK!
}

getClock();
setInterval(getClock, 1000); //Call function every 1000ms