import { FastifyReply } from "fastify";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Request } from "@fallguys/core";

export async function createAccount(req: Request, reply: FastifyReply) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { Username, Password } = req.body;
  const exUser = await req.Instance.AppDbContext.Account.findOne({
    where: { username: Username },
  });

  if (exUser != null) {
    reply.send({ Success: false });
    return;
  }

  const result = await req.Instance.AppDbContext.Account.save({
    username: Username,
    password: bcrypt.hashSync(Password, 8),
  });

  reply.send({ Success: Boolean(result.id) });
}

export async function loginAccount(req: Request, reply: FastifyReply) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { Username, Password } = req.body;
  const exUser = await req.Instance.AppDbContext.Account.findOne({
    where: { username: Username },
  });

  if (exUser == null) {
    reply.send({ Success: false, Token: "" });
    return;
  }

  const success = bcrypt.compareSync(Password, exUser.password);
  if (!success) {
    reply.send({ Success: false, Token: "" });
    return;
  }

  reply.send({
    Success: true,
    Token: jwt.sign(
      { username: exUser.username, id: exUser.id },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      process.env.TOKEN_KEY
    ),
  });
}
