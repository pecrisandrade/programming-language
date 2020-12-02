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
 * Questão 1 - a
 *
 */
var vel = 10; // Em m/s
var tempo = 15; // em segundos
var acel = vel/tempo;
var arrendodado = parseFloat(acel.toFixed(2));
console.log('A aceleração do objeto é ' +arrendodado);