/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI 
 * Aula: Aula 08 - Mini-prova
 * Prova 1
 * Questão 2
 *
 */

var resultado = 0
var a = 7
let b = 3


if (b != 0) { // != é diferente em js, não =!=.
        resultado =  a / b
        console.log(resultado) // a variavel que deve ser exibida é resultado.
   
}else { // um "if" desnecessário.
        console.log('divisao invalida')
}  // faltou a chave para fechar o primeiro "if".
