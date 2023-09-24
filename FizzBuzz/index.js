function runFizzBuzz(N, M) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
	*/
	
	let sequence = '';
	for(let i=N; i<=M; i++) {
		if(i%15 === 0) {
			sequence = `${sequence}FizzBuzz`;
		} else if (i%3 === 0) {
sequence = `${sequence}Fizz`
		} else if (i%5 === 0) {
			sequence = `${sequence}Buzz`
		} else {
sequence = `${sequence}${i}`
		}
		if(i < M) {
			sequence = `${sequence},`
		}
	}

	return sequence;
}

console.log(runFizzBuzz(1,20));