 /*
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componente Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 19 - Vetores
 * Número: 5
 * Nível: 2
 *
 */

function vetor(a, b, x = 0){
	//var x = 0
	if((Math.abs(a-b) <= 1)){
		return []
	} else {
	vetor = []
	if(a < b){
		for(i = a+1 ; i < b; i++){
		vetor[x] = i  
		x++
	}
} else {
	for(i = (b+1) ; i < a ; i++){
		vetor[x] = i  
		x++
}
 	
	}
	return vetor
}
}

console.log(vetor(1, 8))
