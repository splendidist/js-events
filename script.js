console.log("Hello World!");

//select the button and log the element to the console

const button = document.querySelector("button");
console.log(button.textContent); //Output: This is a button

//add an event listener and log to the console when event occurs

button.addEventListener("click", function (event) {
  console.log("event");
}); //Output: event

//other events include mouseover or mouseout

button.addEventListener("click", function (mouseover) {
  console.log("mouseover");
}); //Output: mouseover

button.addEventListener("click", function (mouseout) {
  console.log("mouseout");
}); //Output: mouseout
