var x = [
[1,2,3],
[4,5,6]
]
for(i = 0; i < x.length;i++){
	for(j = 0; j < x[i].length; j++){
		process.stdout.write(`${x[i][j]}\t`)
	}
	console.log()
}