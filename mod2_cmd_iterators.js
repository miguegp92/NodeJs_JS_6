var array = process.argv;
//1.- Linea en blanco, ruta a node.js y al fichero
console.log(" ");
let [var1,var2,...param]=process.argv;

console.log("Route to node.js: "+ var1);
console.log("Route to this file: "+ var2);
 


let numParam=param.findIndex(elem => elem ==="-r");
let nombre=param[numParam+1];
let aux1=param.filter( e => e !== nombre).filter( e => e !== "-r").sort();
var contadores = new Array();
console.log(" ");
/*
aux1.reduce((acc, el, i, a)=>{
	if(el !== a[i-1]){
		console.log(el+": "+acc+1);
	}else{
		//acc = 0;
	}
}, 0);
*/
var contadores = new Array();
var nuevo = new Array();

for (let i=0; i < aux1.length; ++i){
		if(nuevo.find(elem => elem === aux1[i])){
		contadores[nuevo.findIndex(elem => elem === aux1[i])]++;
		
		
		} else{
			nuevo.push(aux1[i]);
			contadores.push(1);
		}
}

nuevo.forEach((elem, i)=> console.log(elem+ ": "+contadores[i]));
