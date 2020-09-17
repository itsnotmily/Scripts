var x = document.getElementsByClassName("seek-bar-floating")[0].childNodes[0].currentSrc;
var y = document.getElementsByClassName("video-settings-container");
var z = "";
if (y[0].children[0].style.display == "inherit"){
	x = x.replace("DASH_96","DASH_1080");z="1080p";
	}
else if (y[0].children[1].style.display == "inherit"){
	x = x.replace("DASH_96","DASH_720");z="720p";
	}
else if (y[0].children[2].style.display == "inherit"){
	x = x.replace("DASH_96","DASH_480");z="480p";
	}
else if (y[0].children[3].style.display == "inherit"){
	x = x.replace("DASH_96","DASH_360");z="360p";
	}
else if (y[0].children[4].style.display == "inherit"){
	x = x.replace("DASH_96","DASH_240");z="240p";
	}
var w = window.open(x);
window.document.title="Shared in "+z;
