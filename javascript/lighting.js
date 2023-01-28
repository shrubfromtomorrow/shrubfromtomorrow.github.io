window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const menuBtn = document.querySelector(".menubtn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
const dropDown = document.querySelector(".dropdown");
let dropDownOpen = false;
menuBtn.addEventListener("click", () => {
  if (!dropDownOpen) {
    dropDown.classList.add("open");
    dropDownOpen = true;
  } else {
    dropDown.classList.remove("open");
    dropDownOpen = false;
  }
});
const juniorLinkList = document.querySelector("#juniorLinkList");
const juniorCollapsible = document.querySelector(".juniorCollapsible");
const vertPlusjun = document.querySelector("#vertPlusjun");
let juniorLinkListOpen = false;
juniorLinkList.addEventListener("click", () => {
  if (!juniorLinkListOpen) {
    juniorLinkList.classList.add("open");
    juniorLinkListOpen = true;
    juniorCollapsible.style.display = "block";
    vertPlusjun.style.opacity = "0";
  } else {
    juniorLinkList.classList.remove("open");
    juniorLinkListOpen = false;
    juniorCollapsible.style.display = "none";
    vertPlusjun.style.opacity = "1";
  }
});
const seniorLinkList = document.querySelector("#seniorLinkList");
const seniorCollapsible = document.querySelector(".seniorCollapsible");
const vertPlussen = document.querySelector("#vertPlussen");
let seniorLinkListOpen = false;
seniorLinkList.addEventListener("click", () => {
  if (!seniorLinkListOpen) {
    seniorLinkList.classList.add("open");
    seniorLinkListOpen = true;
    seniorCollapsible.style.display = "block";
    vertPlussen.style.opacity = "0";
  } else {
    seniorLinkList.classList.remove("open");
    seniorLinkListOpen = false;
    seniorCollapsible.style.display = "none";
    vertPlussen.style.opacity = "1";
  }
});



