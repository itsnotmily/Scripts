javascript:(function(){if(typeof titleCheck === "undefined"){
	var titleCheck = document.title;}
function scrollBrack(event){
	if (event.keyCode === 219){
		document.querySelector('video').playbackRate -= 0.5;
		titleChange();
	}else if(event.keyCode === 221){
		document.querySelector('video').playbackRate += 0.5;
		titleChange();}}
function titleChange(){
document.title = titleCheck + " @ " + document.querySelector('video').playbackRate + "x speed";
if (document.querySelector('video').playbackRate === 1){
	document.title = titleCheck;}}
document.querySelector('body').addEventListener("keydown", scrollBrack);
})()


