const Mutation = {
  // Creates a user
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createAccount(
      {
        data: {
          ...args
        },
      },
      info
    );
   return user;
  },
  createTimesheet(parent, args, ctx, info) {},
  createWorkPeriod(parent, args, ctx, info) {},
  createProject(parent, args, ctx, info) {},
  createExpense(parent, args, ctx, info) {}
};

module.exports = Mutation;