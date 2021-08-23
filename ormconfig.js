module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: ["src/shared/typeorm/migrations/*{.js,.ts}"],
  cli: {
    migrationsDir: "src/shared/typeorm/migrations"
  }
}
