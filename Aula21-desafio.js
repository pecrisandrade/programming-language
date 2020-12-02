var cont = 0
var array = [[1,2,3],[4,5,6]]
for(i = 0; i < array.length; i++){
	for (j = 0; j < array[i].length; j++){
		if(i == j){
			cont++
		}
	}
}
console.log(cont)
console.log(array)