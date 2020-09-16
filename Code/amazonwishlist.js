var totalCalc = "0";
for(var i =0; i<document.querySelectorAll(".a-price").length; i++ ){
	totalCalc = Number(totalCalc) + Number((document.querySelectorAll(".a-offscreen")[i].innerText.split("\n")[0].split("£")[1]));
}
if (i == document.querySelectorAll(".a-price").length){
	console.log(totalCalc);
	document.querySelector(".wl-invite-text").innerText = "The total cost for this list is " + totalCalc;
}

