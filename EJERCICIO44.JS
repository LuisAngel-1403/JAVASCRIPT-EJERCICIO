function ingresar(){ 
    let numero1 = parseInt(prompt("Ingrese numero 1"));
    let numero2 = parseInt(prompt("Ingrese numero 2"));
    let numerosingresados = [];
    for (let i = numero1; i <= numero2; i++) {
        numerosingresados.push(i);
    }
    console.log(numerosingresados);

    let preguntarPosicion;
    do {
        preguntarPosicion = parseInt(prompt("INGRESE AL NUMERO A INGRESAR QUE POSICION DESEA \n1.ULTIMA POSICION\\n2.PRIMERA POSICION\ n3. SALIR PROGRAMA"));
        if (preguntarPosicion > 0 && preguntarPosicion < 4) {
            switch (preguntarPosicion) {
                case 1:
                    let ultimaposicion = parseInt(prompt("Ingrese numero para ultima posicion"));
                    numerosingresados.push(ultimaposicion);
                    console.log(numerosingresados);
                    break;
                case 2:
                    let primeraposicion = parseInt(prompt("Ingrese numero para primera posicion"));
                    numerosingresados.unshift(primeraposicion);
                    console.log(numerosingresados);
                    break;
                case 3:
                    confirm("Usted salio del programa");
                    confirm("Los numeros ingresados finalmente quedaron asi: " + numerosingresados);
                    let totalingresados=numerosingresados.length;
                    console.log(numerosingresados);
                    document.getElementById("parrafo").innerHTML=numerosingresados+",NUMEROS INGRESADOS:    "+totalingresados;
                    

                    break;
            }
        } else {
            confirm("INGRESE NUEVAMENTE EL NUMERO, NO HAY ESA OPCION");
        }
    } while (preguntarPosicion !== 3);


}