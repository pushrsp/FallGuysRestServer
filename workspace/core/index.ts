import { FastifyInstance, FastifyRequest } from "fastify";
import { Repository } from "typeorm";

import { Account } from "./entity/Account";

export interface Repo {
  Account: Repository<Account>;
}

export interface Instance extends FastifyInstance {
  AppDbContext: Repo;
}

export interface Request extends FastifyRequest {
  Instance: Instance;
}

export default {
  db: import("./plugin/db"),
};
