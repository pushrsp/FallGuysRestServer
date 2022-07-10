import { DataSourceOptions } from "typeorm";
import dotenv from "dotenv";

import { Account } from "../entity/Account";

dotenv.config({
  path: `../../.env.${process.env.NODE_ENV}`,
});

export function GetConfig() {
  return {
    type: "mssql",
    host: process.env.HOST,
    port: 1433,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    logging: true,
    options: {
      encrypt: false,
    },
    entities: [Account],
    migrations: [__dirname + "/migration/*.ts"],
    cli: { migrationsDir: "migration" },
  } as DataSourceOptions;
}
