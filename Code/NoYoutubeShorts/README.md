## ![Youtube Icon](/Media/yt24.png "NoYoutubeShorts") NoYoutubeShorts 

Instagram doesn't let you right click and save pictures or videos.

Use this code, left click the image/video and a new tab opens with it in its highest resolution.


```js
function myFunction() {
console.log(event);
if ((event.srcElement.previousSibling !== null) && (event.srcElement.previousSibling.firstChild.localName === "img")){
	window.open(event.srcElement.previousSibling.firstChild.srcset.split(",")[2].split(" ")[0]);
}
else if ((event.srcElement.offsetParent.children[0].children[0] !== null) && (event.srcElement.offsetParent.children[0].children[0].children[0].children[0].localName === "video")){
	window.open(event.srcElement.offsetParent.children[0].children[0].children[0].children[0].currentSrc);
}
}
document.body.addEventListener("click", myFunction);
```
