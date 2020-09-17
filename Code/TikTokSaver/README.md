# ![TikTok Icon](/Media/tiktok24.png "Instagram Picture URL") TikTok Video Saver 
TikTok on Desktop doesn't let you right click and save videos.

Use this code, left click the video and a new tab opens with the video being able to be right clicked and saved.


```js
function myFunction() {
console.log(event);
if (event.srcElement.parentElement.firstChild.currentSrc.indexOf("tiktokcdn.com") !== -1){
	window.open(event.srcElement.parentElement.firstChild.currentSrc);
}
}
document.body.addEventListener("click", myFunction);
```
