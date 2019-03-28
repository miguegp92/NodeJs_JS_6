console.log("");
var saludar = new Date();
var horas = saludar.getHours();
var pi = Math.PI;
pi = pi.toString().substring(0,8);
if(horas >= 7 && horas <= 12){
	console.log("Good morning, it's "+horas+" o'clock");
}else if(horas >= 22 || horas <= 6){
	console.log("Good night, it's "+horas+" o'clock");
}else{
	console.log("Good afternoon, it's "+horas+" o'clock");
}
console.log("");
console.log(pi);
console.log("");
for(var i = 0; i < 23; i++){
	console.log(i +" dec = "+i.toString(16)+" hex = "+i.toString(8)+" oct = "+i.toString(2)+" bin");
}
console.log("");
for(var j = 0; j < 23; j++){
	//if((i < 10 || i > 20) && (i%2 != 0)){
	if (((j % 2) === 1) && ((j < 10) || (j > 20))) {
		console.log(j +" dec = "+j.toString(16)+" hex = "+j.toString(8)+" oct = "+j.toString(2)+" bin");
	}	
}
console.log("");
console.log("\u55e8\uff0c\u4f60\u597d\u5417");
console.log("");
console.log("The program has finished");