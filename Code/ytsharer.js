window.location.href = window.location.href.split("&list")[0];


javascript:(function(){document.querySelector('video').playbackRate += 0.5;if (document.title.includes("@")) {document.title = document.title.split("@")[0] + " @ " + document.querySelector('video').playbackRate + " speed";}else {document.title = document.title + " @ " + document.querySelector('video').playbackRate + " speed";}})()




javascript:function(){window.open(window.location.href.split("&list")[0]);})()