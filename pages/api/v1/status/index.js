import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  /* Query para obter a versão do Postgres */
  const versionPostgres = await database.query("SELECT version();");
  const parsedVersionPostgres = versionPostgres.rows[0].version.split(" ")[1];

  /* Query para obter o número máximo de conexões permitidas */
  const maxConnections = await database.query("SHOW max_connections;");
  const parsedMaxConnections = maxConnections.rows[0].max_connections
    .split(",")[0]
    .trim();

  /* Query pra trazer o número de conexões ativas */
  const databaseName = process.env.POSTGRES_DB;
  const activeConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const activeConnectionsValue = activeConnections.rows[0].count;

  console.log(
    parsedVersionPostgres,
    parsedMaxConnections,
    activeConnectionsValue,
  );
  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version_postgres: parsedVersionPostgres,
        max_connections: parsedMaxConnections,
        active_connections: activeConnectionsValue,
      },
    },
  });
}

export default status;
