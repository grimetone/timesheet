const { forwardTo } = require("prisma-binding");
const { getStartWeek } = require("../permissionUtils");

const { permissionCheck } = require("../permissionUtils");
const newInfo = "{ id permissions }";

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
  async timesheet(parent, args, ctx, info) {
    return ctx.db.query.timesheet({ where: { id: args.id } }, info);
  },
  // Returns a workperiod
  async workPeriod(parent, args, ctx, info){
    return ctx.db.query.workPeriod({ where: { id: args.id } }, info);
  },
  // Returns all users(accounts)
  async users(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["USER", "SUPERUSER", "ADMIN"]);
    return ctx.db.query.accounts({}, info);
  },
  // Returns all projects
  async projects(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["USER", "SUPERUSER", "ADMIN"]);
    return ctx.db.query.projects({}, info);
  },
  userTimesheet: forwardTo("db"),
  async userProjects(parent, args, ctx, info){
    const projects = await ctx.db.query.projects({ where: {users_some: { connect: { id: ctx.request.userId } }}}, info)
    return projects;
  },
  async recentWorkperiods(parent, args, ctx, info) {
    const startWeek = getStartWeek();
    const existingTimesheetArr = await ctx.db.query.workPeriods({ filter: { from_gte: startWeek } }, info);
    return existingTimesheetArr;
  },
  // Returns a users workperiod that hasnt been checked out yet
  async checkinTime(parent, args, ctx, info) {
    const workPeriod = await ctx.db.query.workPeriods({ user: { connect: { id: ctx.request.userId } }, where: { to: null } }, "{id from to}");
    return workPeriod;
  }
};

module.exports = Query;