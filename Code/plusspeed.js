if (typeof titleCheck === "undefined"){
	var titleCheck = document.title;
}

document.querySelector('video').playbackRate += 0.5;
document.title = titleCheck + " @ " + document.querySelector('video').playbackRate + "x speed";

if (document.querySelector('video').playbackRate === 1){
	document.title = titleCheck;
}
