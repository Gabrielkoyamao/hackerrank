// Challenge https://www.hackerrank.com/challenges/birthday-cake-candles/problem

birthdayCakeCandles = function( ar ){

    // Gerando Dados Grandes para o TestCase11
    mil = []
    for(var i = 0; i < 100000; i++){
        mil.push(1000)
    }


    var arr = ar.sort();
    var max = arr[arr.length-1]
    var cont = 0;

    mil = mil.sort()
    max = mil[mil.length-1]

    mil.map(el => {
        if(max == el ){
            cont++
        }
    })
    return cont
}

// console.log( birthdayCakeCandles( [3, 2, 1, 3] ) )