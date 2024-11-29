let nombre=prompt("Ingrese tu nombre:");
let peso=parseInt(prompt("Ingreso tu peso en kg: "));
let altura=parseFloat(prompt("Ingreso tu altura en metros:"));
let masacorporal=parseFloat(peso/(altura*altura));
console.log("La altura del paciente "+nombre+" es: "+altura); 
console.log("El peso del paciente "+peso+" es: "+peso); 
console.log("La masa carporal de "+nombre+" es: "+masacorporal.toFixed(2)); 