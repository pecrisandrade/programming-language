/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 20 - Exercício Individual - Vetores
 * Questão: 2
 *
 */
function f(x) { // function esta escrita da forma errada.
    var total = 0 // total deve ser iniciada em 0, pois é um contador
    for (var i = x.length - 1; i > -1; i--) {
        if (x[i] == 0)
            total++ // deve-se incrementar o contador, não por dois sinais de igualdade
    }
    console.log(total)
}

f([0,2,3,2,0,5,0,13,0,0,25,1,0,12,2,5,4,0]) // simplesmente um teste para ver que o programa funciona