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
 * Questão: 1
 * Letra: c
 *
 */

 ArrayA = [1,2,3,4,5]
 ArrayB = [1,2,3,4,5]
 cont = 0

 if(ArrayA.length != ArrayB.length){
 	console.log('os vetores não são idênticos')
 	cont++
 }
 if(ArrayA.length == ArrayB.length){
 	for(i = 0; i < ArrayA.length; i++){
 		if(ArrayA[i] != ArrayB[i]){
 			console.log('Os vetores não são idênticos')
 			cont++
 			break;
 		}
 	}
 }
 if(cont == 0){
 	console.log('Os vetores são idênticos')
 }