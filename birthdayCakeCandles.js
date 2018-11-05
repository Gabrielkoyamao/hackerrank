// Challenge https://www.hackerrank.com/challenges/birthday-cake-candles/problem

birthdayCakeCandles = function( ar ){
      
    var i = 0;
    var j = 0;
    var cont = 0;
    var maior = ar[0];

    while(i < ar_count ){

        if(maior < ar[i]){
            maior = ar[i];
        }
        i++;
    }

    while(j < ar_count){
        if(maior == ar[j]){
            cont++;
        }
        j++;
    }

    return cont;
}

console.log(birthdayCakeCandles(4, [3,1,2,3]))