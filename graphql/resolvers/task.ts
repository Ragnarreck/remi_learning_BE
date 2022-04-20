import {
  objectType,
  queryType,
  mutationType,
  mutationField,
  nonNull,
  stringArg,
  booleanArg,
  extendType,
} from "nexus";

export const task = objectType({
  name: "Task",
  definition(t) {
    t.string("id");
    t.string("title");
    t.boolean("finished");
    t.string("content");
  },
});

export const getTasks = extendType({
  type: "Query",
  definition(t) {
    t.list.field("getTasks", {
      type: "Task",
      async resolve(one, two, { prisma }) {
        const tasks = await prisma.task.findMany();
        return tasks;
      },
    });
  },
});

export const getTask = extendType({
  type: "Query",
  definition(t) {
    t.field("getTask", {
      type: "Task",
      args: {
        id: stringArg(),
      },
      resolve: (_parent, { id }, { prisma }) => {
        if (!id) return null;
        const task = prisma.task.findUnique({ where: { id } });
        if (!task) return null;

        return task;
      },
    });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.field("bigRedButton", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.prisma.task.deleteMany({});
        return `${count} user(s) destroyed. Thanos will be proud.`;
      },
    });
    t.crud.deleteOneTask();
    t.crud.updateOneTask();
  },
});

export const updateById = mutationField("updateById", {
  type: "Task",
  args: {
    id: nonNull(stringArg()),
    finished: nonNull(booleanArg()),
  },
  async resolve(_root, { id, finished }, { prisma }) {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { finished },
    });

    return updatedTask;
  },
});

export const createTask = mutationField("createTask", {
  type: "Task",
  args: {
    title: nonNull(stringArg()),
    content: nonNull(stringArg()),
  },
  async resolve(_root, { title, content }, { prisma }) {
    const createdTask = await prisma.task.create({
      data: {
        title,
        content,
      },
    });

    return createdTask;
  },
});

export const deleteById = mutationField("deleteById", {
  type: "Task",
  args: {
    id: nonNull(stringArg()),
  },
  async resolve(_root, { id }, { prisma }) {
    const deletedTask = await prisma.task.delete({
      where: { id },
    });

    return deletedTask;
  },
});
