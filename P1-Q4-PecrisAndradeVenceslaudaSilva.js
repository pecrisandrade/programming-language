/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 18 - Primeira Avaliação Individual
 * Questão: 4
 * 
 */

 function elevar(b) {  // não se colocar "var" na área de argumento da função.
    a = 7;
    Resultado = 1; // o sinal deve ser positivo
    for (let i = b; i > 0; i--) {
        Resultado = Resultado * a // resultado está escrito errado, com I no lugar de l // não deve ter um * antes de =.
    }

    return Resultado; // return se escreve com todas as letras minúsculas. // a variavel que se deseja retornar é Resultado, pois ela que terá armazenada a em potencia de b
}