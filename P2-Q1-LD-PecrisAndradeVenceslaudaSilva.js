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
 * Letra: d
 *
 */


 function comparar(ArrayA, ArrayB){
 	
 	if(ArrayA.length != ArrayB.length){
 		return 'Os vetores não são idênticos'
 	}
 	for(i = 0; i < ArrayA.length; i++){
 		if(ArrayA[i] != ArrayB[i]){
 			return 'Os vetores não são idênticos'
 		}
 	}
 	return 'Os vetores são idênticos'
 }

 console.log(comparar([0,1,2,3,4,5], [0,1,2,3,4,5]))