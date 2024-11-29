function sumaArray() {
    let numero = parseInt(document.getElementById("numero").value);
    let numeros = [];
    let suma = 0;

    for (let i = 0; i<numero;i++) {
        let numeroIngresado = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numeroIngresado);  
        suma += numeroIngresado;        
    }
    console.log("Los números ingresados son: " + numeros);
    console.log("La suma total de los números es: " + suma);}