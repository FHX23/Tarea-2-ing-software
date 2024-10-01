// 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("");
//10 al 1
for (let i = 10; i >=1; i--) {
    console.log(i);
}

console.log("");
//1 al 10 solo pares
for (let i = 1; i <= 10; i++) {
    if(i%2 == 0)
        {console.log(i);
        
    }
}

console.log("");
// 1 al 10 solo impares
for (let i = 1; i <= 10; i++) {
    if(i%2 != 0)
        {console.log(i);
        
    }
}
console.log("");
//1 al 10 solo multiplo de 3
for (let i = 1; i <= 10; i++) {
    if(i%3 == 0)
        {console.log(i);
        
    }
}

console.log("");
//1 al 10 solo multiplo de 5
for (let i = 1; i <= 10; i++) {
    if(i%5 == 0)
        {console.log(i);
        
    }
}

console.log("");
//1 al 10 solo multiplo de 3 y 5
for (let i = 1; i <= 10; i++) {
    if(i%3 == 0 && i%5==0)
        {console.log(i);
        
    }
}

console.log("");
//1 al 10 solo multiplo de 3 o 5
for (let i = 1; i <= 10; i++) {
    if(i%3 == 0 || i%5 == 0)
        {console.log(i);
        
    }
}
