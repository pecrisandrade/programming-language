/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 27 - Segunda Avaliação Individual
 * Questão: 2
 * Letra: a
 *
 */

cont = 0
ArrayA = [
[1,2,3],
[4,5,2],
[2,8,9]
]

for(i = 0; i < ArrayA.length; i++){
	for(j = 0; j < ArrayA[i].length; j++){
		if(ArrayA[i][j] == 2){
			cont++
		}
	}
}
console.log(cont)