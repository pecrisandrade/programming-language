/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI 
 * Aula: Aula 10 - Mini-prova
 * Questão 1 - b
 */

 var a = 20;
 var b = 5;
 var c = 23;
 var d = 0;
 if ((a%2 != 0 && b%2 != 0) || (a%2 != 0 && c%2 != 0)|| (a%2 != 0 && d%2 != 0) || (b%2 != 0 && c%2 != 0) || (b%2!=0 && d%2!=0) || (c%2 != 0 && d%2 != 0) ) {
 	console.log('Dois dos números digitados são ímpares');
 }else {
 	console.log('Error');
 }