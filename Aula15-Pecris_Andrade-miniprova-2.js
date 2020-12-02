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
 * Questão: 2
 *
 */

 function f(x) { 					// erro de digitação, a forma correta de escrita é function.
    var resultado = x; 				// variável resultado deve ser igualada a x, ja que a função é inclusiva, para receber a soma de todos antecessores ate zero
    while (x > 0) { 				// a variavel declara é "x", e não "y".
        x--; 						//decrementa a variavel, caso contrario nunca sairá do "while"
        resultado = resultado + x 	//resultado deve ser somado ao antecessor de "x", até que o mesmo chegue a zero
    }
    return resultado 				// é necessario um "return" para que a variavel retorne como resposta
}
console.log(f(5)) 					// apenas um ponto separa o "console" do "log", e não dois pontos. === 
				  					// Deve-se chamar a função, e não a variavel, pois é necessario executar a função.