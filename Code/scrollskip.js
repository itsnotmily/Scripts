if (window.location.href.includes("www.netflix.com")){

const videoPlayer = netflix
  .appContext
  .state
  .playerApp
  .getAPI()
  .videoPlayer;
  
const playerSessionId = videoPlayer
  .getAllPlayerSessionIds()[0];

const player = videoPlayer
  .getVideoPlayerBySessionId(playerSessionId);
  
  
  
document.querySelector("body").addEventListener("wheel", function(){
console.log(event.deltaY);
	if (event.deltaY == 100){
	player.seek(player.getCurrentTime() - 10000)
	console.log("down");
	}
	if (event.deltaY == -100){
	player.seek(player.getCurrentTime() + 10000)
	console.log("up");
	}
});
}

else {


document.querySelector("body").addEventListener("wheel", function(){
console.log(event.deltaY);
	if (event.deltaY == 100){
  document.querySelector('video').currentTime	= document.querySelector('video').currentTime - 10;
	console.log("down");
	}
	if (event.deltaY == -100){
	  document.querySelector('video').currentTime	= document.querySelector('video').currentTime + 10;
	console.log("up");
	}
});
}