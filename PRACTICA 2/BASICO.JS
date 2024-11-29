let numero=[];
for(let i=0;i<5;i++){
    numero=parseInt(prompt("Ingrese numero "+(i+1)+" : "));
    if(numero[i]==numero[i+1]){
        alert("Numero repetido vuelve a hacerlo");
    }
}