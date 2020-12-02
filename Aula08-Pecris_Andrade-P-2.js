/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI 
 * Aula: Aula 08 - Mini-prova
 * Prova 1
 * Questão 1 - b
 *
 */

var a = 50;
var b = 10;
var c = 12;
var cont = 0;

if(a%2 != 0){
cont++;
}if(b%2 != 0){
	cont++;
}if(c%2 != 0){
	cont++;
}
console.log('A quantidade de número(s) impar(es) é ' +cont);