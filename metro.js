document.querySelector("body.mol-fe-ab-dialog").style.overflowY="scroll";
var i;
for (i=0;i<document.querySelectorAll("div").length;i++){
	if (document.querySelectorAll("div")[i].className.indexOf("overlay-") == -1){
		//do nothing;
}
	else if (document.querySelectorAll("div")[i].className.indexOf("overlay-") == 0){
			document.querySelectorAll("div")[i].outerHTML="";
		}
}
var j;
for (j=0;j<document.querySelectorAll("div").length;j++){
	if (document.querySelectorAll("div")[j].className.indexOf("wrapper-") == -1){
		//do nothing;
}
	else if (document.querySelectorAll("div")[j].className.indexOf("wrapper-") == 0){
			document.querySelectorAll("div")[j].outerHTML="";
		}
}
var k;
for (k=0;k<document.querySelectorAll("div").length;k++){
	if (document.querySelectorAll("div")[k].className.indexOf("container-") == -1){
		//do nothing;
}
	else if (document.querySelectorAll("div")[k].className.indexOf("container-") == 0){
			document.querySelectorAll("div")[k].outerHTML="";
		}
}