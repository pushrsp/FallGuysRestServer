import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { DataSource } from "typeorm";

import { GetConfig } from "../config/ormConfig";

//region Entity
import { Account } from "../entity/Account";
//endregion

export default fp(async (instance: FastifyInstance) => {
  try {
    const AppDbContext = new DataSource(GetConfig());

    const log = await AppDbContext.initialize();

    if (log.isInitialized) {
      instance.decorate("AppDbContext", {
        Account: AppDbContext.getRepository(Account),
      });
    }

    // done();
  } catch (e) {
    console.log(e);
  }
});
