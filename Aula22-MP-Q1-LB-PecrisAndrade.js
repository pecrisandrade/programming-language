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
 * Questão: 1b
 *
 */

 function inverse(matriza, matrizb){
 	
 	for(i = 0; i < matriza.length; i++){
 		for(j = 0; j < matriza[i].length; j++){
 			if(matriza[i][j] != matrizb[j][i]){
 				return false
 			}
 		}
 	}
 	return true
 }


 console.log(inverse([[1,2,3],[4,8,6],[7,8,9]] , [[1,4,7],[2,8,8],[3,6,9]]))
