// Challenge https://www.hackerrank.com/challenges/time-conversion/problem

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

}

convertTime('12:05:45AM')