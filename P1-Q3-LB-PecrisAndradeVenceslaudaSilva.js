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
 * Questão: 3
 * Letra: b
 *
 */
 
function soma(n){
cont = 0
var i = 0;
var res = 0;
while (cont < n){
	if(i%2 != 0){
		res = i + res
		cont ++
		i --
	}else{
		i--
	}
 }
 return res
}

console.log(soma(100))