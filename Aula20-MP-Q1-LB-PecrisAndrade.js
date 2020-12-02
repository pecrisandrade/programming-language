/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 20 - Exercício Individual - Vetores
 * Questão: 1b
 *
 */

 function comparação(vetorA, vetorB){
 	x = 0
 	if(vetorA.length != vetorB.length){
 		return false
 	}
 	for(i = (vetorA.length - 1); i >= 0; i--){
 		if(vetorA[i] != vetorB[x]){
 			return false
 		}
 		x++
 	}
 	return true
 }

 console.log(comparação([24,25,12], [12,25,24]))	

