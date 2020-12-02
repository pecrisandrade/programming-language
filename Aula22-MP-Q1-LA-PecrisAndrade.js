/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 22 - Exercício Individual - Arrays
 * Questão: 1a
 *
 */

 function impar(matriz){
 	res = []
 	x = 0
 	for (i = (matriz.length-1); i >= 0; i--){
 		for (j = (matriz[i].length-1); j >= 0; j--){
 			if(matriz[i][j]%2 != 0){
 				res[x] = matriz[i][j]
 				x++
 			}
 		}			
 	}
 	return res
 }

 console.log(impar([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))