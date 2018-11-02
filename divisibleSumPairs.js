// Challenge https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

divisibleSumPairs = function( n, k, ar ){

    var cont = 0
    var debug = []

    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            if(i < j){
                if(ar[i] + ar[j] == k || (ar[i] + ar[j]) % k == 0 ){
                    console.log('(' + ar[i] + ',' + ar[j] +')')
                    cont++
                }
            }
        }
    }

    return cont
}

console.log(divisibleSumPairs( 6, 3, [1,3,2,6,1,2] ))