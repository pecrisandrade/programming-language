 /*
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componente Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 19 - Vetores
 * Número: 5
 * Nível: 1
 *
 */

function pares(vetor){
var cont = 0
	for(i = 0; i < vetor.length; i++){
			if(vetor[i]%2 == 0){
				cont++
		}
	}
	console.log(cont)
}

pares([4,5,6,7,8,9,10,12,14])