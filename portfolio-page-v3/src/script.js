const transition = document.querySelector("#bgtransition");
const textChange = document.querySelector(".textColorChange");

// preload images
var beerpong = new Image();
beerpong.src =
	"https://www.dropbox.com/s/9duz6trkjf6vur5/BPStorePhoto.png?dl=1";
var influence = new Image();
influence.src = "https://www.dropbox.com/s/2fh5vcg5seg258g/Influence.png?dl=1";
var github = new Image();
github.src = "https://www.dropbox.com/s/l9oksz1oz8d1e9d/github.png?dl=1";
var codepen = new Image();
codepen.src = "https://www.dropbox.com/s/u85vyigz7e7w6sh/codepen.png?dl=1";

window.onscroll = function () {
	var top = window.pageYOffset;
	if (top >= 50) {
		transition.classList.add("active");
		textChange.classList.add("active");
	} else {
		transition.classList.remove("active");
		textChange.classList.remove("active");
	}
};

document.getElementById("beerpong").addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("beerpongBG");
});
document.getElementById("beerpong").addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("beerpongBG");
});

document.getElementById("influence").addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("influenceBG");
});
document.getElementById("influence").addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("influenceBG");
});

document.getElementById("github").addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("githubBG");
});
document.getElementById("github").addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("githubBG");
});

document.getElementById("codepen").addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("codepenBG");
});
document.getElementById("codepen").addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("codepenBG");
});
