/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 09
 * Número: 1
 * Nível: 1
 *
 */

 var a = 10;
 var b = 10;
 var c = 10;
 
 if (a > b && a > c){
 	console.log('O maior número é '+a)
 }
 else if (b > a && b > c){
 	console.log('O maior número é '+b)
 }
 else if (c > a && c > b){
 	console.log('O maior número é '+c)
 }
 else if (a == b && a > c){
 	console.log('O maior número é '+a+ ' e foi digitado duas vezes')
 }
 else if (a == c && a > b){
 	console.log('Os maior número é '+a+ ' e foi digitado duas vezes')
 }
 else if (c == b && c > a){
 	console.log('Os maior número é '+c+ ' e foi digitado duas vezes')
 }
 else{
 	console.log('Os três números são iguais e o seu valor é ' +a)
 }