function concatenarArray() {
    let numero = 5;
    let array1 = [];

    for (let i = 0; i < numero; i++) {
        do {
            let input = prompt("Ingrese número " + (i + 1));

            if (input === "") {
                alert("El campo no puede estar vacío. Por favor ingrese un número.");
                continue;
            }
            array1[i] = parseInt(input);
            if (isNaN(array1[i])) {
                alert("Por favor, ingrese un número válido.");
                continue;
            }

            if (!array1.slice(0, i).includes(array1[i])) {
                break;
            } else {
                alert("El número ya existe, ingrese un número diferente.");
            }

        } while (true);

    }

    console.log(array1);
}
