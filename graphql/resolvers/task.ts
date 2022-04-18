import { objectType, queryType, mutationType } from "nexus";

export const Task = objectType({
  name: "Task",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("content");
    t.string("authorId");
    t.string("body");
    t.boolean("finished");
    t.string("createdAt");
  },
});

export const Query = queryType({
  definition(t) {
    t.list.field("getAllU", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.task.findMany();
      },
    });
    t.crud.user();
    t.crud.users();
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.field("bigRedButton", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.prisma.user.deleteMany({});
        return `${count} user(s) destroyed. Thanos will be proud.`;
      },
    });

    t.crud.createOneUser();
    t.crud.deleteOneUser();
    t.crud.deleteManyUser();
    t.crud.updateOneUser();
    t.crud.updateManyUser();
  },
});
