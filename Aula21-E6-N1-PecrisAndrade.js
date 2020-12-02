/*
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componente Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 21 - Arrays
 * Número: 6
 * Nível: 1
 *
 */

 function metade(){
 	for(i = 0; i < array.length; i++){
 		for(j = 0; j < array[i].length; j++){
 			array[i][j] = array[i][j] / 2
 		}
 	}
 	return array
 }

 //var array = [[1,2,3,12],[4,5,5,11],[4,8,9,10]]
 console.log(metade([[1,2,3,12],[4,5,5,11],[4,8,9,10]]))