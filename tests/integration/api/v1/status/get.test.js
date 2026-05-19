/* 
  Dado que eu faça uma requisição GET para a rota /api/v1/status
  Quando a requisição for bem sucedida
  Então o status da resposta deve ser 200
*/

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
