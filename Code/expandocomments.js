var i = 0;
var expCom = setInterval(myTimer, 500);
function myTimer() {
 document.getElementsByClassName("expando-button")[i].click();
	if (i< document.getElementsByClassName("expando-button").length){
		i++;
	}
	if (i === document.getElementsByClassName("expando-button").length){
	console.log("finished");
	clearInterval(expCom);
	}
}
myTimer();