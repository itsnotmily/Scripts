var i;
for(i=0;i<30;i++){
	if ((i%3 == 0) && (i%5 == 0)){
	console.log(i + " is x3 and x5");
	}else if(i%5 == 0){
	console.log(i + " is x5");
	}else if (i%3  == 0){
	console.log(i + " is x3");
	}else{
	console.log(i);}}
