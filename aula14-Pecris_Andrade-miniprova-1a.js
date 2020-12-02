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

var a = 1;
var div = 0;
var b = a;


for (var cont = 0; cont < 100; cont){	

	div = 0;
	a++;
	b = a;


	while (b >= 1){
		
		if(a%b == 0){
			div++;
			b--;

		}else{
			b--;
		}
	}
	

	if((div == 2) && (a%2 != 0)){
		console.log(a)
		cont++
		
		}

	}
