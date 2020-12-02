var tri = []
for (i = 0; i < 5; i++){
	tri[i] = []
	for (j = 0; j < 5; j++){
		tri[i][j] = []
		for(k = 0; k < 3; k++){
			tri[i][j][k] = i + j + k
		}
	}
}
console.log(tri[0,0,0])