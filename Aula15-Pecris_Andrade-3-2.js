/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 15 - Subprogramas
 * Número: 3
 * Nível: 1
 *
 */

 function negativo(a, b){
 	if ((a < 0) || (b < 0)) {
 		return true;
 	} else {
 		return false;
 	}
 }

 console.log(negativo(-1, 2));
 console.log(negativo(2, 0));