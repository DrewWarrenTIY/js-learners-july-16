"use strict";

function firstBuild() {
  const app = document.getElementById("app");
  const helloHeader = document.createElement("h1");
  app.appendChild(helloHeader);
  helloHeader.innerHTML = "Hello World!";
}

firstBuild();
