import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

declare const global: NodeJS.Global;

export const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

//
// We export $queryRaw as a sql method to allow syntax coloring on template strings
//
export const sql = prisma.$queryRaw.bind(prisma);

export default prisma;
