/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 18 - Primeira Avaliação Individual
 * Questão: 3
 * Letra: c
 *
 */

var cont = 0;
var n = 4;
var primo = 0
for(i = 1; i <= n; i++){
	if(n%i == 0){
		cont = cont + i 
	}
}
for (n = 0; n <= cont; n++){
	if(cont%n == 0){
		primo++
	}
}
if (primo > 2){
	console.log('Soma dos divisores não é primo')
}else{
	console.log('Soma dos divisores é primo')
}