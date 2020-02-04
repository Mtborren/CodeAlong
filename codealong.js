//Problem//
//Print all Prime Numbers up to 1000//

//What is a prime #?//
    //Prime number only divisible by itself and one.
//Print #'s//
    //console.log();
//Count to 1000//
    //for(var i = 0; i < 1000; i++);

//Best option to work with large data sets is to break data up and close whats not relevant. Taking away all evens except for 2 helps because no even number except 2 is a prime number.

function printPrimes(){
    for(var i = 0; i = 1000; i++){
        if(i >= 0 && i <= 3){
            console.log(i);
        } else if (i % 2 != 0 || i % 3 != 0){
            //the number is less than 3 and is odd and isn't divisible by 2 or 3.
            var j = 5;
            while(j * j <= i){
                if(i % j === 0 || i % (j + 2) === 0){
                    return false;
                }
                j += 6;
                console.log(i);
            }
        }
    }
}

printPrimes();