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

  let menubtn = document.querySelector("#Menu");
  menubtn.addEventListener("click", function (e) {
    console.log("This is the menubtn!");
  });

  let contactbtn = document.querySelector("#Contact");
  contactbtn.addEventListener("click", function (e) {
    console.log("This is the contactbtn!");
  });

  let mainbtn = document.querySelector("#Home");
  mainbtn.addEventListener("click", function (e) {
    console.log("This is the mainbtn!");
  });
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

export { header, mainpage, menupage };
