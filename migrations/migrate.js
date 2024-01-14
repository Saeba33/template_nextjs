const fs = require("node:fs");
const path = require("node:path"); // Importez path ici

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const schema = path.join(__dirname, "database", "schema.sql");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const migrate = async () => {
  try {
    const sql = fs.readFileSync(schema, "utf8");

    const database = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      multipleStatements: true,
    });

    await database.query(`drop database if exists ${DB_NAME}`);

    await database.query(`create database ${DB_NAME}`);

    await database.query(`use ${DB_NAME}`);

    await database.query(sql);

    database.end();

    console.info(`Databse ${DB_NAME} updated from ${schema} 🆙`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  }
};

migrate();
