import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getBusinesses = async () => await db.any("SELECT * FROM businesses");

export const addBusiness = async (name, location, liftType) =>
  (
    await db.any("INSERT INTO businesses(name, location, liftType) VALUES($1, $2, $3) RETURNING id, name, location, liftType", [
      name, location, liftType,
    ])
  )[0];

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "tpl8_2021H1",
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
