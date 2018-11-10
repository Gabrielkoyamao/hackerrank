// Challenge https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

migratoryBirds = function( arr ){

	var cont = 0
	var aux = 0
	var num = 0

	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			if(arr[i] == arr[j]){
				cont++
			}
			if(cont > aux){
				aux = cont
				num = arr[i]
			}
			if((cont == aux) && (arr[i] != num)){
				if(arr[i] < num){
					num = arr[i]
				}
			}
		}
		cont = 0
	}
	console.log(num)
}

migratoryBirds( [1, 4, 4, 4, 5, 3] )