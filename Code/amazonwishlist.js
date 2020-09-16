var i;
var j = [];
for (i = 0; i<document.getElementsByClassName("a-spacing-none g-item-sortable").length-1; i++){ 
	if (document.getElementsByClassName("a-spacing-none g-item-sortable")[i].dataset.price == "-Infinity"){
		//do nothing;
	}
	else{
	j.push(Number(document.getElementsByClassName("a-spacing-none g-item-sortable")[i].dataset.price));}
	}
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var supertotal = j.reduce(reducer);
console.log(supertotal.toFixed(2));
var howMany = document.getElementsByClassName("a-spacing-none g-item-sortable").length;
alert("You have " + howMany + " things in your wishlist. In total they would cost: " + supertotal.toFixed(2));
console.log("You have " + howMany + " things in your wishlist. In total they would cost: " + supertotal.toFixed(2));
