const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if(numero1 > numero2){
    if(numero1 > numero3){
        console.log("Numero 1 es el mayor de los 3");
    }else{
        console.log("Numero 3 es el mayor de los 3");
    }
}else{
    if(numero2 > numero3){
        console.log("Numero 2 es el mayor de los 3");
    }else{
        console.log("Numero 3 es el mayor de los 3");
    }
}

if(numero1 < numero2){
    if(numero1 < numero3){
        console.log("Numero 1 es el menor de los 3");
    }else{
        console.log("Numero 3 es el menor de los 3");
    }
}else{
    if(numero2 < numero3){
        console.log("Numero 2 es el menor de los 3");
    }else{
        console.log("Numero 3 es el menor de los 3");
    }
}

if(numero1%2 == 0){
    console.log("numero 1 es par");
}else{
    console.log("numero 1 es impar");
}

if(numero2%2 == 0){
    console.log("numero 2 es par");
}else{
    console.log("numero 2 es impar");
}

if(numero3%2 == 0){
    console.log("numero 3 es par");
}else{
    console.log("numero 3 es impar");
}


if(numero1%5 == 0){
    console.log("numero 1 es multiplo de 5");
}else{
    console.log("numero 1 no es multiplo de 5");
}

if(numero2%5 == 0){
    console.log("numero 2 es multiplo de 5");
}else{
    console.log("numero 2 no es multiplo de 5");
}

if(numero3%5 == 0){
    console.log("numero 3 es multiplo de 5");
}else{
    console.log("numero 3 no es multiplo de 5");
}