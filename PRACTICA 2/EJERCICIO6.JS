function buscarFrutas(){
    let fruta=document.getElementById("fruta").value;
    let frutas=["manzana","pera","platano","mandarina","fresa"];
    console.log(frutas);
    if(frutas.includes(fruta)){
        console.log("La fruta "+fruta+" se encuentra en el array");
       document.getElementById("fruta").value="";
    }else{
        console.log("La fruta "+fruta+" no se encuentra en el array");
        document.getElementById("fruta").value="";
    }
}