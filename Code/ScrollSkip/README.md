# README

```Javascript
document.addEventListener("keypress", function(event) {
  if (event.key == "`") {
	if (document.body.style.overflow == ""){
		document.body.style.overflow="hidden";}
		
	else if (document.body.style.overflow == "hidden"){
		document.body.style.overflow="";}  
	}
});

if (window.location.href.includes("www.netflix.com"))
	{
	const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
	const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
	const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);document.querySelector("body").addEventListener("wheel", function(){
		if (event.deltaY == 100) {
			player.seek(player.getCurrentTime() - 10000);
			}
		if (event.deltaY == -100){
			player.seek(player.getCurrentTime() + 10000);
			}
		});}
else {document.querySelector("body").addEventListener("wheel", function(){
	if (event.deltaY == 100) {
		document.querySelector('video').currentTime = document.querySelector('video').currentTime - 10;
		}
	if (event.deltaY == -100) {
		document.querySelector('video').currentTime = document.querySelector('video').currentTime + 10;}
		});}
```		
