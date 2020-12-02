function mediaEstudante(notas, estudante) {
 	var media = 0.0

 	for (i = 0; i < notas[estudante].length; i++) {
 		media = media + notas[estudante][i]
 	}

 	return media / notas[estudante].length
 }

 function mediaComponente(notas, componente) {
 	var media = 0.0
 	for (i = 0; i < notas.length; i++) {

 		media = media + notas[i][componente]
 	}
 	
 	return media / notas.length
 }

 var notas = [
 [9.0, 6.7, 8.3, 4.2, 8.0],
 [3.1, 5.3, 2.6, 1.7, 9.4],
 [5.2, 3.1, 4.2, 7.1, 8.5]
 ];


 console.log(mediaEstudante(notas, 0))

 console.log(mediaComponente(notas, 4))