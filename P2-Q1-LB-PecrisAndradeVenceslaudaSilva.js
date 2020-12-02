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
 * Letra: b
 *
 */

 function contador(ArrayA, n){
 	cont = 0;
 	for(i = 0; i < ArrayA.length; i++){
 		if(ArrayA[i] == n){
 			cont++
 		}
 	}
 	return cont
 }

 console.log(contador([1,2,3,4,5,4,2,1,3,8,4,8,5], 4))