// Challenge https://www.hackerrank.com/challenges/apple-and-orange/problem

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
	
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))