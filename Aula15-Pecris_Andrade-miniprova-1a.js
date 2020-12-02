/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Disciplinas: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 15 - Miniprova
 * Questão: 1a
 *
 */

 function data(mesi, anoi, mesf, anof){
 	
 	cont = 0;
 	
 	while(anoi <= anof){
 		
 		if(mesi == mesf){
 			cont = (anof - anoi) * 12			
 	
 		}else if(mesi < mesf){
 			cont = (mesf - mesi) + ((anof - anoi)*12)
 	
 		}else {
 			anoi++
 			cont = ((12 - mesi) + mesf) + ((anof - anoi)*12)
 	
 		}
 		if(cont == 1){
 			return cont+ " mês"
 		}
 		else{
 			return cont+ " meses"
 		}
 	}	
 	}

console.log(data(7, 1994, 9, 2020))