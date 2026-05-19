const calculadora = require("../models/calculadora.js");

// Testes para a função de soma
/*
Dado que eu tenha os numeros 2 e 3
Quando eu somar os numeros
Entao o resultado deve ser 5
*/

test("Somar 2 e 3 devem resultar em 5", () => {
  const resultado = calculadora.somar(2, 3);
  expect(resultado).toBe(5);
});

/*
  Dado que eu tenha passado os argumentos `a` e `b`
  Quando eu somar os argumentos
  Entao o resultado deve ser "Erro"
*/

test("Somar 'a' + 'b' devem resultar em error", () => {
  const resultado = calculadora.somar("a", "b");
  expect(resultado).toBe("Erro");
});

// Testes para a função de multiplicação

/*
Dado que eu tenha os numeros 2 e 3
Quando eu multiplicar os numeros
Entao o resultado deve ser 6
*/

test("Multiplicar 2 e 3 devem resultar em 6", () => {
  const resultado = calculadora.multiplicar(2, 3);
  expect(resultado).toBe(6);
});

/*
  Dado que eu tenha passado os argumentos `a` e `b`
  Quando eu multiplicar os argumentos
  Entao o resultado deve ser "Erro"
*/

test("Multiplicar 'a' + 'b' devem resultar em error", () => {
  const resultado = calculadora.multiplicar("a", "b");
  expect(resultado).toBe("Erro");
});

// Testes para a função de divisão

/*
  Dado que eu tenha os numeros 6 e 3
  Quando eu dividir os numeros
  Entao o resultado deve ser 2

*/

test("Dividir 6 por 3 devem resultar em 2", () => {
  const resultado = calculadora.dividir(6, 3);
  expect(resultado).toBe(2);
});

/* 
  Dado que eu tenha passado os argumentos `a` e `b`
  Quando eu dividir os argumentos
  Entao o resultado deve ser "Erro"
*/

test("Dividir 'a' por 'b' devem resultar em error", () => {
  const resultado = calculadora.dividir("a", "b");
  expect(resultado).toBe("Erro");
});

/*
  Dado que eu tenha passado o numero 6 e o numero 0
  Quando eu dividir os numeros
  Entao o resultado deve ser "Erro"
*/

test("Dividir 6 por 0 devem resultar em error", () => {
  const resultado = calculadora.dividir(6, 0);
  expect(resultado).toBe("Erro");
});
