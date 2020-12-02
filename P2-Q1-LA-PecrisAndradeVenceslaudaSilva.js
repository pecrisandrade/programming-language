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
 * Letra: a
 *
 */

 cont = 0
 ArrayA = [1,2,3,2,5,8,4,7,5,1,2,5,4,1,0,2,0,6]

 for(i = 0; i < ArrayA.length; i++){
 	if(ArrayA[i] == 0){
 		cont++
 	}
 }

 console.log(cont)