import _ from "lodash";
import { header, mainpage } from "./mainpage.js";
import "./style.css";

header();
mainpage();

let mainbtn = document.querySelector(".iconsChild");
mainbtn.addEventListener("click", function (e) {
  if ((e.innerText = "Main")) {
    console.log("This is the mainbtn!");
  }
});

let menubtn = document.querySelector(".iconsChild");
menubtn.addEventListener("click", function (e) {
  if ((e.innerText = "Menu")) {
    console.log("This is the menubtn!");
  }
});
