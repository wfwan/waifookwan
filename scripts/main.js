// Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

// Example above used JavaScript to change the heading text to Hello world!
// It grabbed a reference to the heading and stored it in a variable called myHeading
// This is similar to how we apply CSS to elements
// 1. select elements that we want to affect using CSS selector
// 2. define the style we want for those elements
// when we want to do something to an element, we select it first

// We set the value of the myHeading variable's textContent property (which represents the <h1> to hello world)

// const myImage = document.querySelector("img");

// myImage.addEventListener("click", () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/toyota.jpg");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// });

// stored a reference to img element in myImage, then assigned a click event function
// everytime the img is clicked, the function does the following
// 1. retrieves the value of the image's src attribute
// 2. use if else structure to check src value

// API allows developer to interact with a programming environment. Web APIs built on top of JavaScript allow us to manipulate various part of the browser web pages it display
// Events, things happen in the browser. They're key to making websites interactive. Most common example is click event
// Functions, a way of packaging code that we wish to reuse. Define code inside a function once and then run it as many time as we like, which helps to avoid writing the same code over and over
// Conditionals, code structures used to test if an expression returns true or false

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// myButton.addEventListener("click", () => {
//   setUserName();
// });

// setUserName() function contains a prompt() function which ask the user to enter data and stores it in a variable after they click OK
// we're asking the user to enter a name and storing it in myName
// the code use the Web Storage API to store data in the browser and retrieve it later
// we use localStorage.setItem() function to create and store a data called "name", setting its value to the myName variable
// finally, set the textContent of the heading to a string that includes the user's stored name
