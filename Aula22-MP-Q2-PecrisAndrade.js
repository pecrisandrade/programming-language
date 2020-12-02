/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 22 - Exercício Individual - Arrays
 * Questão: 1b
 *
 */

 function f(x) {									//faltou a letra 't' na palavra function
 var total = 0
    for (var i = 0; i < x.length; i++) {			//como os valores são de 0 ate o fim do vetor, deve ser feito o incremento para não criar um laço infinito
        for (var j = 0; j < x[i].length; j++){		// deve ser incremento, e não decremento // deve verificar o tamano da linha com x[i]
           if (x[i][j] == 0) {						//a notação correta é x[j][i] para conferir o valor da variavel
	                total++								//total deve ser incrementado para contar a quantidade de zeros
	            }
	        }
	    }
	    return total 								// o return total deve se localizar fora do for
}													// faltou a chave que fecha a function

console.log(f([[1,2,0,3,0,2,0,1,0,4,5,0],[1,0,5,0,6,0,8,1,0,5,0]]))
