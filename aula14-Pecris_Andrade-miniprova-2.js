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
 * Questão: 1a
 *
 */

let a = 5, b = 2, r = -1


do  {
    a = a - b
} while (a >= b) // enquanto for maior deve-se executar o programa // maior ou igual, para continuar a divisão quando for igual, assim tendo resto 0
r = a // "r" recebe o valor de "a", que é o resto

console.log(r)
