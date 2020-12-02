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
 * Questão: 2
 * Letra: d
 *
 */

 function data(dia1, mes1, ano1, dia2, mes2, ano2){
 
 if (ano1 > ano2){
	return -1
}	if (ano1 < ano2){
	return 1
}	if (ano1 == ano2){
		if(mes1 > mes2){
		return -1
	}	if (mes1 < mes2){
		return 1
	}
	if (mes1 == mes2){
		if (dia1 > dia2){
			return -1
		}if (dia1 < dia2){
			return 1
		}
		if(dia1 == dia2) {
			return 0
		}
	}
}
 }

 console.log(data(5, 5, 2009, 6, 5, 2019))