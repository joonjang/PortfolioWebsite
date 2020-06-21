const transition = document.querySelector("#bgtransition");
const textChange = document.querySelector(".textColorChange");

const bpTile = document.getElementById("beerpong");
const influenceTile = document.getElementById("influence");
const githubTile = document.getElementById("github");
const codepenTile = document.getElementById("codepen");


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

// start screen color change from black to white
// background and header text
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

bpTile.addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("beerpongBG");
});
bpTile.addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("beerpongBG");
});

influenceTile.addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("influenceBG");
});
influenceTile.addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("influenceBG");
});

githubTile.addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("githubBG");
});
githubTile.addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("githubBG");
});

codepenTile.addEventListener("mouseover", function () {
	transition.classList.remove("active");
	transition.classList.add("codepenBG");
});
codepenTile.addEventListener("mouseout", function () {
	transition.classList.add("active");
	transition.classList.remove("codepenBG");
});

var coll = document.getElementsByClassName("collapsible");
var i;

// contact button collapsible
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var collPhoto = document.getElementsByClassName("collapsiblePhoto");
var photoClass = document.getElementsByClassName("photoTile");
// var photoInfo = document.getElementsByClassName("photoInfo");
var i;

// photo tile collapsible
for (i = 0; i < collPhoto.length; i++) {
  collPhoto[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
		// shrink
	  content.style.maxHeight = null;
	  content.style.width = "100%";
	  
	  
    } else {
		// enlarge
	  content.style.maxHeight = content.scrollHeight + "px";
	  content.style.width = "1000px";
    } 
  });
}

function isolatePhoto(clickedId){

	// var bp = document.getElementById("beerpong");
	// bp.classList.remove("photoTile");
	var contentHeight = document.getElementById("content").getBoundingClientRect().height;

	for(var i = 0; i < photoClass.length; i++){
		photoClass[i].style.display = "none";
	};

	// for(var i = 0; i < photoInfo.length; i++){
	// 	photoInfo[i].style.display = "block";
	// }

	var infoId = document.getElementById(clickedId + "Info");
	infoId.style.display = "block";
	infoId.style.height = contentHeight + "px";



}

function showPhoto(clickedId){

	// var bp = document.getElementById("beerpong");
	// bp.classList.add("photoTile");

	bpTile.style.animationDelay = "calc(1 * var(--stagger-delay))";
	influenceTile.style.animationDelay = "calc(1 * var(--stagger-delay))";
	githubTile.style.animationDelay = "calc(1 * var(--stagger-delay))";
	codepenTile.style.animationDelay = "calc(1 * var(--stagger-delay))";
	
	for(var i = 0; i < photoClass.length; i++){
		photoClass[i].style.display = "block";
	};

	// var idString = String(clickedId);
	// var tmp = idString.substring(0, idString.length - 4);
	var infoId = document.getElementById(clickedId);
	infoId.style.display = "none";

	
}
	

