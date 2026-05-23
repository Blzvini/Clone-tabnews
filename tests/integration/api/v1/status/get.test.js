/* 
  Dado que eu faça uma requisição GET para a rota /api/v1/status
  Quando a requisição for bem sucedida
  Então o status da resposta deve ser 200
*/

describe("GET /api/v1/status", () => {
  test("GET to /api/v1/status should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.updated_at).toBeDefined();

    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  });

  test("GET to /api/v1/status should return version_postgres", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.dependencies.database.version_postgres).toBeDefined();

    const version = responseBody.dependencies.database.version_postgres;
    expect(version).toBe("16.14");
  });

  test("GET to /api/v1/status should return max_connections", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.dependencies.database.max_connections).toBeDefined();

    const maxConnections = responseBody.dependencies.database.max_connections;
    expect(maxConnections).toBe("100");
  });

  test("GET to /api/v1/status should return active_connections", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.dependencies.database.active_connections).toBeDefined();
    const activeConnections =
      responseBody.dependencies.database.active_connections;
    expect(activeConnections).toBe(1);
  });

  test("GET to /api/v1/status should return only required fields", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    // Verificar que existem apenas os campos específicos e que não há campos extras
    expect(Object.keys(responseBody)).toEqual(["updated_at", "dependencies"]);
    expect(Object.keys(responseBody.dependencies)).toEqual(["database"]);
    expect(Object.keys(responseBody.dependencies.database)).toEqual([
      "version_postgres",
      "max_connections",
      "active_connections",
    ]);
  });
});
