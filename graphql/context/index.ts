import { prisma } from "../database";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

export type Context = {
  req: NextApiRequest;
  prisma: PrismaClient;
};

export function createContext(req: NextApiRequest): Context {
  return {
    req,
    prisma,
  };
}
