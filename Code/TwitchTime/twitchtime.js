var s = Math.floor(document.querySelector("video").currentTime);
function convertS(s) {
var h,m,s;
	s = Math.floor(document.querySelector("video").currentTime);
    m = Math.floor(s / 60);
	s = s % 60;
	h = Math.floor(m / 60);
    m = m % 60;
	if (m<10){m="0"+m;}
	if (s<10){s="0"+s;}
    return h + ':' + m + ':' + s;}
convertS(s);
document.querySelector("button.player-button.player-button--volume.qa-control-volume").innerHTML = convertS(s);
setInterval(function(){ 
document.querySelector("button.player-button.player-button--volume.qa-control-volume").innerHTML = convertS(s);
}, 1000);
