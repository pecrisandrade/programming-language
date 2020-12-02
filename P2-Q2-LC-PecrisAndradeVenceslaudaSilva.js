/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 27 - Segunda Avaliação Individual
 * Questão: 2
 * Letra: c
 *
 */

 cont = 0
 Array = [ [ [ 3, 6 ], [ 4, 6 ] ], [ [ 5, 8 ], [ 6, 9 ] ] ]

 for(i = 0; i < Array.length; i++){
 	for (j = 0; j < Array[i].length; j++){
 		for (k = 0; k < Array[i][j].length; k++){
 			if(Array[i][j][k]%2 != 0){
 				cont++
 			}
 		}
 	}
 }

 console.log(cont)