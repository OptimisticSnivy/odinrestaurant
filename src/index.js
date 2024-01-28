import _ from "lodash";
import {
	header,
	mainpage,
	menupage,
	contactpage,
	removeDOM,
} from "./mainpage.js";
import "./style.css";

header();

let mainbtn = document.querySelector("#Home");
mainbtn.addEventListener("click", function() {
	removeDOM();
	header(); // Organize DOM, then remove
	mainpage();
});

let menubtn = document.querySelector("#Menu");
menubtn.addEventListener("click", function() {
	removeDOM();
	header(); // Organize DOM, then remove
	menupage();
	console.log("menubtn");
});

let contactbtn = document.querySelector("#Contact");
contactbtn.addEventListener("click", function() {
	removeDOM();
	header(); // Organize DOM, then remove
	contactpage();
	console.log("contactbtn");
});
