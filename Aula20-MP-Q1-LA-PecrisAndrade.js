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
 * Questão: 1a
 *
 */

 /*function impar(vetor){
 	res = [];
 	x = 0;
 	for (i = (vetor.length-1); i >= 0; i--){
 		if (vetor[i]%2 != 0){
 			res [x] = vetor[i];
 			x++
 		}
 	}
 	return res
 }

 console.log(impar([11,20,25,33,38,44,55,80,87,101]))*/

 function imp(){

 	for(var i = (vetor.length-1) ; i >= 0 ; i--)
 	{
 		if(vetor[i] % 2 == 0)
 		{
 			resu[index] = vetor[i]
 			index++
 		}
 	}
 	return resu
 }
 
 console.log( imp([ 2 , 3 , 4 , 5 , 6 , 7 ] ) )