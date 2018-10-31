// Challenge https://www.hackerrank.com/challenges/between-two-sets/problem

// !voltar!
getTotalX = function( a, b ){

	//mdc do primeiro e do 2, testar em todos e retornar os multiplos em comum

	this.exists = function(arr, number){
		if(arr.length > 0 && number){
			var x = arr.find(el => {
				// console.log('achou tem q dar true')
				return number == el
			})
		}
		return typeof(x) == "undefined"?false:true;
	}

	var firstMultiples = []
	var firstMDC = 1;

	var secondMultiples = []
	var secondMDC = 1;

	for (var i = 0; i < a.length; i++) {
		for (var j = 2; j < 100; j++) {
			if(typeof(a[i]) == "undefined"){
				console.log('leaving')
				break;
			}
			else if(a[i] % j == 0){
				if(!this.exists(firstMultiples, j)){
					firstMultiples.push(j)
				}
			}
		}
	}

	for (var i = 0; i < b.length; i++) {
		for (var j = 0; j < 100; j++) {
			if(typeof(b[i]) == "undefined"){
				console.log('leaving')
				break;
			}
			else if(b[i] % firstMultiples[j] == 0){
				if(!this.exists(secondMultiples, firstMultiples[j])){
					secondMultiples.push(firstMultiples[j])
				}
			}
		}
	}

	// == DEBBUGING ==
		console.log(firstMultiples)
		console.log(secondMultiples)

	// find the commun numbers

		var commun = []
			
		if(firstMultiples.length > secondMultiples.length){

			firstMultiples.map(f => {
				var a = secondMultiples.find(s => {
					return f == s				
				})

				if(a){
					commun.push(a)
				}
			})

		}else{
			
			secondMultiples.map(f => {
				var a = firstMultiples.find(s => {
					return f == s				
				})

				if(a){
					commun.push(a)
				}
			})
		}

		return commun.length
		
		//console.log(getTotalX( [3,4], [24, 48] ))

		//n entendi direito oq é p fazer
}

console.log(getTotalX( [2,4], [16,32,96] ))