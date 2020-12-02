/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 09
 * Número: Desafio
 *
 */

var a = -20;
var b = 100;
var c = -10;
var med = (a + b + c) / 3;
var a1 = Math.abs(a-med);
var b1 = Math.abs(b-med);
var c1 = Math.abs(c-med);

if(a1 < b1 && a1 < c1){
	console.log('O número mais perto da média é ' +a)
}
else if(b1 < a1 && b1 < c1){
	console.log('O número mais perto da média é ' +b)
}
else if(c1 < b1 && c1 < a1){
	console.log('O número mais perto da média é ' +c)
}
else if(c1 == a1 && c1 < b1){
	console.log('Os números mais perto da média são ' +c+ ' e ' +a)
}
else if(c1 == b1 && c1 > a1){
	console.log('Os números mais perto da média são ' +c+ ' e ' +b)
}
else if(b1 == a1 && b1 > c1){
	console.log('Os números mais perto da média são ' +b+ ' e ' +a)
}
else {
	console.log('Os três números são iguais, logo tem o mesmo valor da média')
}
