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
 * Questão: 2
 * Letra: c
 *
 */

var dia1 = 1;
var mes1 = 1;
var ano1 = 2020;
var dia2 = 10;
var mes2 = 1;
var ano2 = 2020;

if (ano1 > ano2){
	console.log('Segunda data é mais antiga');
}if (ano1 < ano2){
	console.log('Primeira data mais antiga');
}if (ano1 == ano2){
	if(mes1 > mes2){
		console.log('Segunda data mais antiga')
	}if (mes1 < mes2){
		console.log('Primeira data mais antiga');
	}
	if (mes1 == mes2){
		if (dia1 > dia2){
			console.log('Segunda data é mais antiga')
		}if (dia1 < dia2){
			console.log('Primeira data mais antiga')
		}
		if(dia1 == dia2) {
			console.log('Datas iguais')
		}
	}
}