import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getBusinesses = async () =>
  await db.any("SELECT * FROM businesses");

export const addBusiness = async (name, city, country, lift) =>
  (
    await db.any(
      "INSERT INTO businesses(name, city, country, lift) VALUES($1, $2, $3, $4) RETURNING id, name, city, country, lift",
      [name, city, country, lift],
    )
  )[0];

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
