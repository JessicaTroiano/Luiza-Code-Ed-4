let n = 5;

function recursiveFatorial(n){

    if (n===1){
        console.log("criterio de parada com "+n);
        return 1;
    }
    console.log("n: "+n);
    fatorial = n * recursiveFatorial(n-1);
    console.log("fatorial de "+n+" é "+fatorial);
    return fatorial;
}

console.log(recursiveFatorial(n));