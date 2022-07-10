import { FastifyReply, FastifyRequest } from "fastify";
import { Request } from "@fallguys/core";

export async function createAccount(req: Request, reply: FastifyReply) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { Username, Password } = req.body;
  await req.Instance.AppDbContext.Account.save({
    username: Username,
    password: Password,
  });
  reply.send("HI");
}
