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

 var a = 5;

 if(a%6 == 0) {
 	console.log('O número '+a+' é divisivel por 3 e por 2.')
 }
 else if (a%3 == 0) {
 	console.log('O número '+a+' é divisivel apenas por 3')
 }
 else if (a%2 == 0){
 	console.log('O número ' +a+ ' é divisivel apenas por 2')
 }
 else {
 	console.log('O número ' +a+ ' não é divisivel por 3 nem por 2')
 }