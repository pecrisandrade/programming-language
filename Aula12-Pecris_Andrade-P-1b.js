/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 12 - Exercício Individual sobre Laços
 * Questão: 1b
 *
 */

 var a = -3;
 var b = 3;
 conta = a;
 contb = b;
 while (b > 1){
 	a = conta * a;
 	b--;
 }
 console.log(conta+ ' elevado a ' +contb+ ' é igual a ' +a);

 // programa funciona normalmente com números negativos