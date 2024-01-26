import _ from "lodash";
import { header, mainpage, menupage, removeDOM } from "./mainpage.js";
import "./style.css";

header();

let mainbtn = document.querySelector("#Home");
mainbtn.addEventListener("click", function(e) {
	console.log("This is the mainbtn!");
});

let menubtn = document.querySelector("#Menu");
menubtn.addEventListener("click", function(e) {
	removeDOM();
	console.log("This is the menubtn!");
});

let contactbtn = document.querySelector("#Contact");
contactbtn.addEventListener("click", function(e) {
	removeDOM();
	console.log("This is the contactbtn!");
});
