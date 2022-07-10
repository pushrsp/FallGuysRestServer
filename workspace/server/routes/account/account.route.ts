import { DoneFuncWithErrOrRes, FastifyServerOptions } from "fastify";
import { Instance } from "@fallguys/core";

import { createAccount } from "./account.handler";

export default function (
  instance: Instance,
  opts: FastifyServerOptions,
  done: DoneFuncWithErrOrRes
) {
  //유저 생성

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  instance.post("/", { handler: createAccount });

  done();
}
