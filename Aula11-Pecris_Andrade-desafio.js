/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 11 - Laços
 * Nível: Desafio
 *
 */

var num = 0;
var cont = num;
var prod = 1;

while (num > 1){
	prod = num * prod;
	num--
 }

 var a = prod;
 var b = prod;
 primo = 1;
 
 while (b > 1){
 	if(a%b == 0){
 		primo++
 		b--
 	}
 	if(b%a != 0){
 		b--
 	}
 }
 if (primo <= 2){
 	console.log('o fatorial de ' +cont+' é '+prod+ ' , e ' +a+ ' é primo.')
 } else {
 	console.log('o fatorial de ' +cont+' é '+prod+ ' , e ' +a+ ' não é primo.')
 }