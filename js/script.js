"use strict";

const greetings = document.getElementById("greetings");

let now = new Date();

if (now.getHours() >= 18) {
  greetings.innerText = "Good night";
  console.log("Boa noite");
} else if (now.getHours() >= 5 && now.getHours() < 12) {
  greetings.innerText = "Good morning";
  console.log("Boa dia");
} else if (now.getHours() >= 12 && now.getHours() < 18) {
  greetings.innerText = "Good aftertoon";
  console.log("Boa tarde");
}

const profileDiv = document.querySelector(".div-profile");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  profileDiv.classList.toggle("hidden");
};

const profile = document.getElementById("profile");

profile.addEventListener("click", openModal);

const cards = document.querySelectorAll(".cards");
const playbtn = document.querySelectorAll(".playbtn");
