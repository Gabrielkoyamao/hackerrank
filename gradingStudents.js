// Challenge https://www.hackerrank.com/challenges/grading/problem

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
}

gradingStudents([ 73, 67, 38, 33 ])