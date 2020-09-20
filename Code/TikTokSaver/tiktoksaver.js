function myFunction() {
if (event.srcElement.parentElement.firstChild.currentSrc.indexOf("tiktokcdn.com") !== -1){
	window.open(event.srcElement.parentElement.firstChild.currentSrc);
}
}
document.body.addEventListener("click", myFunction);

