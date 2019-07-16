"use strict";

function firstBuild() {
  const app = document.getElementById("app");
  // Create and add header
  const helloHeader = document.createElement("h1");
  app.appendChild(helloHeader);
  helloHeader.innerHTML = "Hello World!";

  // Create and add container for build & destroy buttons
  const buildDestroyContainer = document.createElement("div");
  app.appendChild(buildDestroyContainer);

  // Create and insert buttons into their container
  const buildButton = document.createElement("button");
  buildDestroyContainer.appendChild(buildButton);
  buildButton.outerHTML = `<button onclick="sayHello();">Say Hello</button>`;
  const destroyButton = document.createElement("button");
  buildDestroyContainer.appendChild(destroyButton);
  destroyButton.outerHTML = `<button onclick="goodbye();">Say Bye Bye</button>`;

  // Create and add container for greetings
  const helloContainer = document.createElement("div");
  app.appendChild(helloContainer);
  helloContainer.className = "js-hello-container";
}

// Create and add greeting to greeting container
function sayHello() {
  const container = document.querySelector(".js-hello-container");
  const newHello = document.createElement("p");
  container.appendChild(newHello);
  newHello.innerHTML = "Hello!";
}

// Clear the greeting container
function goodbye() {
  const container = document.querySelector(".js-hello-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

firstBuild();
