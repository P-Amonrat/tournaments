import { createSessionStorage } from "@remix-run/node";
import * as crypto from "crypto";

import { redis } from "./redis.server";

const maxAge = 60 * 60 * 6;

export function createRedisSessionStorage({ cookie }: any) {
  return createSessionStorage({
    cookie,
    async createData(data) {
      const rand = crypto.randomBytes(32).toString("base64");
      const id = `sess:${rand}`;

      const value = JSON.stringify(data);

      if (value) {
        await redis.setex(id, maxAge, value);
      }

      return id;
    },
    async readData(id: string) {
      const value = await redis.get(id);

      if (value) {
        return JSON.parse(value);
      }

      return null;
    },
    async updateData(id, data) {
      const next = JSON.stringify(data);
      await redis.setex(id, maxAge, next);
    },
    async deleteData(id) {
      await redis.del(id);
    },
  });
}
