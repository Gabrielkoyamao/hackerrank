// Challenge https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem 

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
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])