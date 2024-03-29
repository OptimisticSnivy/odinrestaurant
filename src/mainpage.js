import bat from "./images/bat1.jpg";
import { homepagecontent } from "./home.js";

const header = () => {
	let content = document.body.querySelector(".content");

	let header = document.createElement("div");
	let headerText = document.createElement("div");
	let icons = document.createElement("div");
	let iconsMenu = document.createElement("div");
	let iconsContact = document.createElement("div");
	let iconsHome = document.createElement("div");

	header.className = "header";

	icons.className = "icons";
	iconsHome.className = "iconsChild";
	iconsMenu.className = "iconsChild";
	iconsContact.className = "iconsChild";

	iconsHome.innerText = "Home";
	iconsHome.id = "Home";
	iconsMenu.innerText = "Menu";
	iconsMenu.id = "Menu";
	iconsContact.innerText = "Contact";
	iconsContact.id = "Contact";

	headerText.innerText = "GOTHAM CITY CAFE";
	headerText.className = "headerText";

	const batIcon = new Image();
	batIcon.src = bat;
	batIcon.className = "icon";

	icons.appendChild(iconsHome);
	icons.appendChild(iconsMenu);
	icons.appendChild(iconsContact);

	header.appendChild(headerText);
	header.appendChild(batIcon);

	content.appendChild(header);
	content.appendChild(icons);
};

const mainpage = () => {
	let contentSub = homepagecontent();

	let content = document.body.querySelector(".content");
	content.appendChild(contentSub);

	setInterval(() => {
		let mainbtn = document.querySelector("#Home");
		mainbtn.addEventListener("click", function() {
			mainbtn.innerText = "Home*";
			removeDOM();
			header();
			content.appendChild(contentSub);
		});
	}, 100);
};

const menupage = () => {
	let content = document.body.querySelector(".content");

	let menu = document.createElement("div");
	menu.innerText = "This is the menu!";
	menu.className = "content_sub";

	setInterval(() => {
		let menubtn = document.querySelector("#Menu");
		menubtn.addEventListener("click", function() {
			removeDOM();
			header(); // Organize DOM, then remove
			content.appendChild(menu);
		});
	}, 100);
};

const contactpage = () => {
	let content = document.body.querySelector(".content");

	let contact = document.createElement("div");
	contact.innerText = "This is the contact!";
	contact.className = "content_sub";

	setInterval(() => {
		let contactbtn = document.querySelector("#Contact");
		contactbtn.addEventListener("click", function() {
			removeDOM();
			header(); // Organize DOM, then remove
			content.appendChild(contact);
		});
	}, 100);
};

const removeDOM = () => {
	let content = document.body.querySelector(".content");
	content.innerHTML = "";
};

export { header, mainpage, menupage, contactpage, removeDOM };
