/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 14 - Exercicio individual sobre Laços Parte 2
 * Questão: 1b
 *
 */
 

var matriz = 5;
var numero = 'X';
var espaco = " ";

for (i = 0; i < matriz; i++) {

	for (j = 0; j < matriz; j++){
		if ((i == j) || (i == 0 && j == 4) || (i == 1 && j == 3) || (i == 3 && j == 1) || (i == 4 && j == 0)){
			process.stdout.write(numero);
		}else {
			process.stdout.write(espaco);
		}
		}
		console.log();
	}