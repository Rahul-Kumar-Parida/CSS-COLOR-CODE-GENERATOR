const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 225)},${randomInt(0, 225)},${randomInt(0, 225)})`;

const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const superparent = document.querySelector(".superparent");
const childbtn = document.querySelector(".btn1");
const parentbtn = document.querySelector(".btn2");
const superparentbtn = document.querySelector(".btn3");

const rgbCode1 = document.querySelector(".rgbcode1");
const rgbCode2 = document.querySelector(".rgbcode2");
const rgbCode3 = document.querySelector(".rgbcode3");

const rgbDiv1 = document.querySelector(".code1");
const rgbDiv2 = document.querySelector(".code2");
const rgbDiv3 = document.querySelector(".code3");

//child

child.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  rgbCode1.textContent = e.currentTarget.style.backgroundColor;
});

//parent

parent.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  rgbCode2.textContent = e.currentTarget.style.backgroundColor;
});

//superparent
superparent.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  rgbCode3.textContent = e.currentTarget.style.backgroundColor;
});

const alertbox = document.querySelector("body");

const allert = function (e) {
  alert("RANDOM CLICK ON THE CODE(A, B, C) BUTTON!!!");
};
alertbox.addEventListener("mouseenter", allert);

setTimeout(() => alertbox.removeEventListener("mouseenter", allert), 6000);
