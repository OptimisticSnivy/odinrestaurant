import cafe from "./images/bg1.jpg";

const homepagecontent = () => {
	let container = document.createElement("div");
	container.className = "container";
	
	let imgcontainer = document.createElement("div");
	imgcontainer.className = "imgcontainer";
	
	let titleCard = document.createElement("div");
	titleCard.className = "titleCard";
	titleCard.innerText = "This is the Gotham City Cafe!";

	const cafeImage = new Image();
	cafeImage.src = cafe;
	cafeImage.className = "cafe";

	container.append(titleCard);
	imgcontainer.append(cafeImage);
	container.append(imgcontainer);
	return container;
};

export { homepagecontent };
