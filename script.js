// Ejercicio 1
function paridad(n){
    n%2 == 0 ? console.log("Es par") : console.log("Es impar")
}

//Ejercicio 2
function mayor(n1,n2){
    if (n1>n2) {
        console.log("Mayor: " + n1)
    }else if (n2>n1){
        console.log("Mayor: " + n2)
    }else{
        console.log("Son iguales")
    }
}

//Ejercicio 3
function multiplo5(n){
    n2 = n.toString()
    n%5 == 0 ? console.log(n2 + " es multiplo de 5") : console.log(n2 + " no es multiplo de 5")
}

//Ejercicio 4
function anteriores(n){
    for (let i=0 ; i<=n ; i++) {
        console.log(i)
    }
}

//Ejercicio 5
function repetidorPalabra(p,n){
    for (let i=0 ; i<n ; i++){
        console.log(p)
    }
}

//Ejercicio 6
function mostrarArray(arr){
    for (let i=0 ; i< arr.length; i++){
        console.log(arr[i])
    }
}

//Ejercicio 7
function arraySin5to(arr){
    for (let i=0 ; i< arr.length; i++){
        if (i != 4) { console.log(arr[i]) }  
    }
}

//Ejercicio 8
function multiplicador(arr, n){
    for (let i=0 ; i< arr.length; i++){
        console.log(arr[i]*n)
    }
}