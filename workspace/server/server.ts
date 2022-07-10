import pino from "pino";
import dotenv from "dotenv";

import build from "./bootstrap";

dotenv.config({
  path: `../../.env.${process.env.NODE_ENV}`,
});

const server = build({
  logger: pino({
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  }),
});

async function start() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await server.listen({ port: process.env.PORT, host: "0.0.0.0" });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();
