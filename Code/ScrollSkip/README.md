# 🖱️ ScrollSkip

This allows the user to skip forward or backward in a video by 10 seconds, using the scroll wheel on the mouse. It should work on any html5 video player, such as youtube, twitch, netflix etc.

Press \` (button left of 1 on the keyboard) to make the scrollbar disappear and prevent you from scrolling the page by mistake, press it again to make it reappear.

```Javascript
document.addEventListener("keypress", function(event) {
  if (event.key === "`") {
	if (document.body.style.overflow === ""){
		document.body.style.overflow="hidden";}
		
	else if (document.body.style.overflow === "hidden"){
		document.body.style.overflow="";}  
	}
});

if (window.location.href.includes("www.netflix.com"))
	{
	const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
	const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
	const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);document.querySelector("body").addEventListener("wheel", function(){
		if (event.deltaY > 0) {
			player.seek(player.getCurrentTime() - 10000);
			}
		else if (event.deltaY < 0){
			player.seek(player.getCurrentTime() + 10000);
			}
		});}
else {document.querySelector("body").addEventListener("wheel", function(){
	if (event.deltaY > 0) {
		document.querySelector('video').currentTime = document.querySelector('video').currentTime - 10;
		}
	else if (event.deltaY < 0) {
		document.querySelector('video').currentTime = document.querySelector('video').currentTime + 10;}
		});}
```
