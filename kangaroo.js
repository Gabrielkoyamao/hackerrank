// Challenge https://www.hackerrank.com/challenges/kangaroo/problem

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

}

kangaroo(0, 2, 5, 3);