import bat from "./images/bat1.jpg";

const mainpage = () => {
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
	iconsMenu.innerText = "Menu";
	iconsContact.innerText = "Contact";

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

export { mainpage };
