import { objectType, queryType, mutationType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    // t.model.tasks();
  },
});

export const Query = queryType({
  definition(t) {
    t.list.field("getAllUsers", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({});
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
