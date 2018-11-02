// Challenge https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

migratoryBirds = function( arr ){

	var rep = arr[0];
	var cont = 0;
	var i = 0;

	arr.map(e => {


		do{

			if(e == rep){
				cont++
			}
			i++
			if(i == arr.length - 1){
				console.log('Type ' + e + ': ' + cont )
				rep = e
			}
		}while(i < arr.length)

		cont = 0;
		i = 0;
	})
}

migratoryBirds( [1, 4, 4, 4, 5, 3] )