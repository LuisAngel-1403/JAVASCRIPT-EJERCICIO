console.log("---------------------------------------------------------SISTEMA BANCARIO---------------------------------------------------------");
let saldo_Actual = parseFloat(prompt("Ingrese saldo actual:"));
while (true) {
    let operacion = prompt("Ingrese operación (deposito/retiro) o escriba 'salir' para finalizar:").trim().toLowerCase();

    if (!operacion || !isNaN(operacion)) {
        console.log("Operación no válida. Por favor, ingrese 'deposito', 'retiro' o 'salir'.");
        continue;
    }

    switch (operacion) {
        case "deposito":
            do {
                deposito = parseFloat(prompt("Ingrese monto a depositar:"));
                if (deposito <= 0) {
                    console.log("El depósito debe ser mayor a 0, no un número negativo.");
                } else {
                    saldo_Actual += deposito;
                    console.log("El saldo actual es: " + saldo_Actual);
                    break;
                }
            } while (deposito <= 0);
            break;

        case "retiro":
            let retirar;
            do {
                 retirar = parseFloat(prompt("Ingrese monto a retirar:"));
                if (retirar > saldo_Actual) {
                    console.log("El monto a retirar excede el saldo disponible.");
                } else if (retirar <= 0) {
                    console.log("El monto a retirar debe ser mayor a 0.");
                } else {
                    saldo_Actual -= retirar;
                    console.log("El saldo actual es: " + saldo_Actual);
                    break;
                }
            } while (retirar > saldo_Actual || retirar <= 0);
            break;

        case "salir":
            console.log(`Gracias por usar el sistema bancario. ¡Hasta luego!`);
            console.log("El saldo actual es: " + saldo_Actual);
            break;
        default:
            console.log("Operación no válida. Por favor, ingrese 'deposito', 'retiro' o 'salir'.");
            break;
    }
    if (operacion === "salir") {
        break;
    }
}
