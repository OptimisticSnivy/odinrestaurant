import bat from "./images/bat1.jpg";

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

	icons.appendChild(iconsHome);
	icons.appendChild(iconsMenu);
	icons.appendChild(iconsContact);

	header.appendChild(headerText);
	header.appendChild(batIcon);

	content.appendChild(header);
	content.appendChild(icons);
};

const mainpage = () => {
	let content = document.body.querySelector(".content");

	let main = document.createElement("div");
	main.innerText = "This is the main!";
	main.className = "mainpage";

	content.appendChild(main);
};

const menupage = () => {
	let content = document.body.querySelector(".content");

	let menu = document.createElement("div");
	menu.innerText = "This is the menu!";
	menu.className = "content";

	content.appendChild(menu);
};

const contactpage = () => {
	let content = document.body.querySelector(".content");

	let contact = document.createElement("div");
	contact.innerText = "This is the contact!";
	contact.className = "content";

	content.appendChild(contact);
};

const removeDOM = () => {
	let content = document.body.querySelector(".content");
	content.innerHTML = "";
	console.log("removing!");
};

export { header, mainpage, menupage, contactpage, removeDOM };
