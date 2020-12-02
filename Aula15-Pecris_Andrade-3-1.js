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

function volume(aresta){
	if(aresta > 0){
		var vol = aresta ** 3;
		}
		return vol	
}

var total = volume(4);
console.log(total)