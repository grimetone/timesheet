const { forwardTo } = require("prisma-binding");

const Query = {
  // Returns own account object
  async self(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.account({ where: { id: ctx.request.userId } }, info);
  },
  // Returns a user
  async user(parent, args, ctx, info){
    return ctx.db.query.account({ where: { id: args.id }}, info);
  },
  // Returns a single project
  async project(parent, args, ctx, info) {
    return ctx.db.query.project({ where: { id: args.id } }, info);
  },
  // Returns a timesheet
  timesheet: forwardTo("db"),
  // Returns a workperiod
  workPeriod: forwardTo("db"),
  // Returns all users(accounts)
  async users(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    return ctx.db.query.accounts({}, info);
  },
  // Returns all projects
  async projects(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    return ctx.db.query.projects({}, info);
  },
  userTimesheet: forwardTo("db"),
  userProjects: forwardTo("db"),
  async recentWorkperiods(parent, args, ctx, info) {
    //const begin = new Date(new Date() - new Date().getTimezoneOffset() * 60 * 1000)
    // return begin.toISOString()
    //     query countTodayClients($begin: DateTime!, $end: DateTime!) {
    //       _allClientsMeta(filter: {
    //         createdAt_gte: begin
    //     createdAt_lt: end
    //       } {
    //           count
    //         }
    // }

  },
};

module.exports = Query;