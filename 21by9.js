var sizePrompt;
sizePrompt = prompt("f, tw, wide");
if (window.location.host === "www.twitch.tv"){
	if (sizePrompt === "f"){
		document.querySelector(".video-player video").style.transform = "scale(1.33,1)";}
	else if (sizePrompt === "tw"){
		document.querySelector(".video-player video").style.transform = "scale(1.3,1)";}
	else if (sizePrompt === "wide"){
		document.querySelector(".video-player video").style.transform = "scale(1.48,1)";}
}
else if (window.location.host === "www.youtube.com") {
	if (sizePrompt === "f"){
		document.querySelector(".ytd-player").style.transform = "scale(1.34,1)";}
	else if (sizePrompt === "wide"){
		document.querySelector(".ytd-player").style.transform = "scale(1.76,1)";}
}
else{
	document.querySelector(".ytd-player").style.transform = "scale(1.34,1)";
}

