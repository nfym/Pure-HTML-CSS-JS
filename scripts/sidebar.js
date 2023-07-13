const body = document.querySelector("body");

const sidebar = body.querySelector("nav");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

const pages = [
  { key: "dashboard", src: "./views/page1.html" },
  { key: "", src: "./views/page2.html" },
];

let ifm = document.getElementById("dataDetailIframe");
console.log("🚀 ~ file: sidebar.js:19 ~ ifm:", ifm.src);

const navs = sidebar.querySelectorAll(".nav-link");
console.log("🚀 ~ file: sidebar.js:14 ~ navs:", navs);
navs.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    navLink.classList.add("active");
    if (Array.from(navLink.classList).includes("dashboard")) {
      ifm.src = pages[0].src;
    } else {
      ifm.src = pages[1].src;
    }
  });
});

const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
