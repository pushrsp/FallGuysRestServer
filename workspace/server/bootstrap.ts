import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

//region Core
import Core from "@fallguys/core";
//endregion

function build(opts: FastifyServerOptions = {}) {
  const f: FastifyInstance<Server, IncomingMessage, ServerResponse> =
    fastify(opts);

  f.register(Core.db);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  f.register(import("./routes/account/account.route"), {
    prefix: "/api/account",
  });

  f.addHook("onRequest", async (req: any, res, next) => {
    req.Instance = f;
    // next();
  });

  return f;
}

export default build;
