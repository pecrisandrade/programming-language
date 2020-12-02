/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI 
 * Aula: Aula 10 - Mini-prova
 * Questão 2
 */

var a = 4;
let b = 14;

if (a - b < 10 && a - b > 0 || b - a < 10 && b - a > 0) { // foi acrescido uma condição para evitar erros com números negativos.
        console.log('próximos'); // se a condição for verdadeira, deve-se exibir que são próximos.
} else if (a - b > 10 || b - a > 10) { // o sinal deveria ser de maior que.
        console.log('distantes'); // deveria exibir que são distantes.
} else if (a == b) { // excesso de código.
        console.log('iguais'); // a condição encontra os números iguais.
}else {
	console.log('A distância entre eles é de exatamente 10') // Caso não entre .
}
