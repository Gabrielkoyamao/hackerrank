// Challenge https://www.hackerrank.com/challenges/between-two-sets/problem

getTotalX = function( a, b ){

	var min = a[a.length-1]
	var max = b[0]
	var multiples = []
	var all = a.concat(b)
	var cont = 0
	
	for(var i = min; i <= max; i++ ){
		for(var j = 0; j <= all.length; j++){
			if(i % all[j] == 0 || all[j] % i == 0){
				cont++
			}else {
				break;
			}
		}
		if(cont == all.length){
			multiples.push(i)
		}
		cont = 0
	}
	console.log(multiples.length)
}

getTotalX( [2,4], [16,32, 96] )