// Challenge https://www.hackerrank.com/challenges/between-two-sets/problem

getTotalX = function( a, b ){

	var min = a[a.length-1]
	var max = b[0]
	var multiples = []
	var all = a.concat(b)
	var cont = 0
	
	for(var i = min; i <= max; i++ ){
		for(var j = 0; j < all.length; j++){
			cont = 0
			
			// debugando
			console.log("TESTANDO COM => ", i)

			console.log("all[j]: ", all[j])
			console.log("i % all[j]", i % all[j])

			if(i % all[j] == 0){
				cont++
			}else {
				break;
			}
		}
		console.log(cont)
		console.log()
		console.log("PROXIMO")
		console.log()

		if(cont == all.length){
			multiples.push(i)
		}
	}

	console.log(multiples)

}

getTotalX( [2,4], [16,32,96] )