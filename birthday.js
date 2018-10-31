// Challenge https://www.hackerrank.com/challenges/the-birthday-bar/problem

birthday = function(s, d, m){

	// m = numero de blocos consecutivos, d = soma

	var arr = []
	var aux = 0;
	var cont = 0;
	var i = 0;
	var mref = m
	var flag = 0;

	if( s.length == 1 ){
		if(s[0] == d){
			console.log(1)
		}
	}else{

		while(i < s.length){

			arr = s.slice(i,mref)
			arr.map(el => {
				aux+=el
				if(aux == d && flag >= 1){
					cont++
				}
				flag++;
			})
			aux = 0
			i++
			mref = i + m
			flag = 0;
		}

		console.log(cont)
	}

}

// birthday( [ 1, 2, 1, 3, 2 ], 3, 2)
// birthday( [2,2], 4, 2)
// birthday( [4], 4, 1)
// birthday( [2, 5, 1, 3, 4 ,4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)