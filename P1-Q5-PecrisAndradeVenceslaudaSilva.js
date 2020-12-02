/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: responder TSI ou IPI
 * Aula: Aula 18 - Primeira Avaliação Individual
 * Questão: 3
 * Leta: a
 *
 */

 function hexagonal(value){
 	var n = Infinity
 	var hexn = []
 	var penn = []
 	cont = 0	

 	for (i = 0 ; i < n ; i++){
 		var hex = ((2*i)*((2*i)-1))/2
 		var pen = ((3*(i**2))-i)/2
 		hexn.push(hex)
 		penn.push(pen) 

 		if (hexn.indexOf(penn[i]) != -1 && penn[i] > 0 ){
 			console.log('O número ' +penn[i]+ ' é pentagonal e hexagonal ao mesmo tempo')
 			cont++
 		}
 		if (cont == (value)) {
 			break;
 		}
 	}
 }

 (hexagonal(3))
