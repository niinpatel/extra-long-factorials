/**
 * returns factorial of any in the form of integer or string (if factorial is too large to fit into an integer)  *
 */
function extraLongFactorials(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
            //fact = fact + fact + .. i times
            let factxi = "0";  // this is (fact * i) for us.
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = factxi; // update value of fact before continuing the loop.
        }
    }

    return fact;
}


console.log(extraLongFactorials(25));  // prints 15511210043330985984000000

console.log(extraLongFactorials(34));  // prints 295232799039604140847618609643520000000

//console.log(extraLongFactorials(500));  // this one might take very long time, but returns accurate answer nonetheless