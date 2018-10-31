// -- Variables GLOBAL --
const limit=10000;

convertTime = function( s ){
	// conveter horas no padrao norte-americano para o sul-americano ex: 07:05:45PM para 19:05:45

	//s = '12:05:45AM'

	hora = s.split(":")[0]
	var x = s.substr(s.length - 2)

	// heel not a want the cule not 

	convertPM = [
		{'01': '13'},
		{'02': '14'},
		{'03': '15'},
		{'04': '16'},
		{'05': '17'},
		{'06': '18'},
		{'07': '19'},
		{'08': '20'},
		{'09': '21'},
		{'10': '22'},
		{'11': '23'},
		{'12': '12'}
	]

	convertAM = [
		{
			'12':'00'
		}
	]

	if(x == 'PM'){

		var x = convertPM.find(e => {
			return e[hora]
		})

		concats = x[hora] + ':' + s.split(":")[1] + ':' + s.split(":")[2].substr(0,2)
		console.log(concats)
	}else{

		var x = convertAM.find(e => {
			return e[hora]
		})

		if(!x){
			console.log(s.substr(0,s.length -2))
		}else{
			concats = x[hora] + ':' + s.split(":")[1] + ':' + s.split(":")[2].substr(0,2)
			console.log(concats)
		}
	}

	// convertTime('12:05:45AM')
}

gradingStudents = function( grades ){

	var grades = [ 73, 67, 38, 33 ]
	var dados = []
	var aux

	grades.map(el => {

		if(el >= 38){

			aux = el
			while(el % 5 != 0){
				el++;
			}
			if( el - aux < 3){
				dados.push(el)
			}else{
				dados.push(aux)
			}
		}else{
			dados.push(el)
		}
	})

	console.log(dados)
	// gradingStudents([ 73, 67, 38, 33 ])
}

countApplesAndOranges = function( s, t, a, b, apples, oranges ){

	// == DEBUGING ==
		// console.log('starting with => ')
		// console.log(s, t, a, b, apples, oranges)

	var applesDistance = []
	var orangesDistance = []
	var dataApple = []
	var dataOrange = []

	apples.map(apple => {
		applesDistance.push(a + apple);		
	})

	oranges.map(orange => {
		orangesDistance.push(b + orange)
	})	

	applesDistance.map(apple => {
		if(apple >= s && apple <= t){
			dataApple.push(apple)
		}
	})

	orangesDistance.map(orange => {
		if(orange >= s && orange <= t){
			dataOrange.push(orange)
		}
	})

	// == DEBUGING ==
		// console.log(applesDistance)
		// console.log(orangesDistance)
		// console.log(dataApple)
		// console.log(dataOrange)

		console.log(dataApple.length)
		console.log(dataOrange.length)
	
	//console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
}

kangaroo = function( x1, v1, x2, v2 ){

	var firstKangaroo = x1;
	var secondKangaroo = x2;

	for (var i = 0; i <= 10; i++) {

		firstKangaroo += v1;
		secondKangaroo += v2;

		if(firstKangaroo == secondKangaroo){
			return 'YES'
			break
		}
		else if(i == 10){
			return 'NO'
		}
	}

	// kangaroo(0, 2, 5, 3);
}

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
		
		// console.log(getTotalX( [2,4], [16,32,96] ))
		//console.log(getTotalX( [3,4], [24, 48] ))

		//n entendi direito oq é p fazer
}

breakingRecords = function( scores ){

	var highestScore = scores[0];
	var lowestScore = scores[0];
	var brokeLowestScore = 0;
	var brokeHighestScore = 0;

	scores.map(el => {
		if(el > highestScore){
			highestScore = el;
			brokeHighestScore++;
		}
		else if(el < lowestScore){
			lowestScore = el;
			brokeLowestScore++;
		}
	})

	console.log(brokeHighestScore, brokeLowestScore)
	//breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
}

birthday = function(s, d, m){

	// m = numero de blocos consecutivos, d = soma

	s.map(el => {

	})
}

birthday( [ 1, 2, 1, 3, 2 ], 3, 2)
