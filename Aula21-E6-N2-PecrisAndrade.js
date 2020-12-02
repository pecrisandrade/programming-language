/*
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componente Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 21 - Arrays
 * Número: 6
 * Nível: 2
 *
 */

 function maior(){
 	soma1 = 0
 	soma2 = 0
 	for(i = 0; i < array1.length; i++){
 		for(j = 0; j < array1[i].length; j++){
 			soma1 = array1[i][j] + soma1
 		}
 	}
 	for (i = 0; i < array2.length; i++){
 		for (j = 0; j < array2[i].length; j++){
 			soma2 = array2[i][j] + soma2
 		}
 	}
 	if (soma1 > soma2){
 		return array1
 	}if (soma2 > soma1){
 		return array2
 	}else{
 		return 'o soma dos elementos dos arrays tem o mesmo valor'
 	}
 }

 array1 = [[1,2],[1,4]]
 array2 = [[2,2],[1,4]]
 console.log(maior())