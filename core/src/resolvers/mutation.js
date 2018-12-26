const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { permissionCheck, getStartMonth, getEndMonth, getCurrTime } = require('../permissionUtils');
const newInfo = "{ id permissions }";

const Mutation = {
  // Logs user in
  async login(parent, args,ctx, info) {
    console.log('grabbin email!');
    const user = await ctx.db.query.account({ where: { email: args.email } });
    console.log('heres yo user');
    console.log(user)
    if (!user) {
      throw new Error('Invalid email');
    }
    console.log(args.password)
    console.log(user.password);
    // Bcrypt password comparison
    const validPass = await bcrypt.compare(args.password, user.password);
    if (!validPass) {
      throw new Error('Invalid Password!');
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // No thrown errors returns user
    return user;
  },
  // Creates a user
  async createUser(parent, args, ctx, info) {
    const email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    console.log('creating user');
    console.log(password);
    // const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    //permissionCheck(self, ['ADMIN']);
    const user = await ctx.db.mutation.createAccount({ data: { ...args, email: email, password: password, permissions: { set: ["USER"] } } }, info);
    return user;
  },
  // Creates a project
  async createProject(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["USER", "SUPERUSER", "ADMIN"]);
    const project = await ctx.db.mutation.createProject({ data: { ...args } }, info);
    return project;
  },
  // Deletes specified project
  async deleteProject(parent, args, ctx, info){
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    // Confirms that project exists
    const project = await ctx.db.query.project({
      where: {
        id: args.id
      }
    });
    if (!project) throw new Error("Project not found!");
    // Returns workperiod
    return ctx.db.mutation.deleteProject({ where: { id: args.id } }, info);
  },
  // Adds a user to a project
  async addUserToProject(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    const project = await ctx.db.query.project({
      where: {
        id: args.projectId
      }
    });
    const user = await ctx.db.query.account({ where: { id: args.userId } });
    const projectUsers = project.users.push(user);
    if (project){
      return ctx.db.mutation.updateProject(
      {
        where: { id: project.id },
        data: {
          users: projectUsers
        }
    });
  }
},
// Removes a specified user from projects user array
  async removeUserFromProject(parent, args, ctx,info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    // Returns the project
    const project = await ctx.db.query.project({
      where: {
        id: args.projectId
      }
    });
    // Filters specified user from array of users
    const filteredUsers = project.users.filter(item => item.id !== args.userId);
    // Updates projecct with new user array
    return ctx.db.mutation.updateProject(
      {
        where: { id: project.id },
        data: {
          users: filteredUsers
        }
      });
  },
  // Creates a timesheet
  async createTimesheet(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["USER", "SUPERUSER", "ADMIN"]);
    const timesheet = await ctx.db.mutation.createTimesheet(
      {
        data: {
          user: {
            connect: { id: "cjpc5dax760e40a966aq1a0mk" } // temp
          },
          ...args
        }
      },
    );
    return timesheet;
  },
  // Creates a workperiod
  async createWorkPeriod(){
  },
  // Creates a workperiod
  async checkin(parent, args, ctx, info) {
                                           // Permissions check
                                           const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
                                           permissionCheck(
                                             self,
                                             [
                                               "USER",
                                               "SUPERUSER",
                                               "ADMIN"
                                             ]
                                           );
                                           // Get start of month
                                           const startMonth = getStartMonth();
                                           // Get end month
                                           const endMonth = getEndMonth();
                                           // See if workperiod exists
    const existingWorkperiod = await ctx.db.query.workPeriods({ user: { connect: { id: ctx.request.userId }}, where: { to: null } }, "{id from to}");
   if (existingWorkperiod[0]){
     throw new Error("Existing workperiod not closed!");
   }
                                           //Check if there is a valid, existing timesheet
                                           const existingTimesheetArr = await ctx.db.query.timesheets({ filter: { from_gte: startMonth, to_lte: endMonth } }, "{id}");
                                           let existingTimesheet = existingTimesheetArr[0];
                                           // Creates timesheet if no viable one exists
                                           if (!existingTimesheet) {
                                             timesheet = await ctx.db.mutation.createTimesheet({ data: { user: { connect: { id: ctx.request.userId } }, from: startMonth, to: endMonth } }, "{ id }");
                                           }
                                           const currTime = getCurrTime();
    const workPeriod = await ctx.db.mutation.createWorkPeriod({ data: { timesheet: { connect: { id: existingTimesheet.id } }, user: { connect: { id: ctx.request.userId } }, from: currTime } }, info);
                                           return workPeriod;
                                         },
async checkout(parent, args, ctx, info){
  // Check if there is an open workperiod
  const existingWorkperiod = await ctx.db.query.workPeriods({ user: { connect: { id: ctx.request.userId } }, where: { to: null } }, "{id to from}");
  if (!existingWorkperiod[0]){
    throw new Error("No workperiods to close!");
  }
  const currTime = getCurrTime();
  const workperiod = await ctx.db.mutation.updateWorkPeriod({
    data: {
      to: currTime
    },
    where: {
      id: existingWorkperiod[0].id
    }
  });
  return workperiod;
  },
  // Deletes a workperiod
  async deleteWorkPeriod(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["USER", "SUPERUSER", "ADMIN"]);
    // Checks whether workperiod exists
    const workperiod = await ctx.db.query.workPeriod({
      where: {
        id: args.id
      }
    });
    // Throw error if iten is not found
    if (!workperiod) throw new Error("Workperiod not found!");
    // Returns workperiod
    return ctx.db.mutation.deleteWorkPeriod({ where: { id: args.id } }, info);
  },
  // Creates an expense
  async createExpense(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["USER", "SUPERUSER", "ADMIN"]);
    const { userId } = ctx.request;
    const expense = await ctx.db.mutation.createExpense(
      {
        data: {
          registeredBy: {
            connect: { id: userId }
          },
          ...args
        }
      },
    );
    return expense;
  },
  // Deletes an expense
  async deleteExpense(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    // Checks whether workperiod exists
    const expense = await ctx.db.query.expense({
      where: {
        id: args.id
      }
    });
    // Throw error if iten is not found
    if (!expense) throw new Error("Expense is not found!");
    // Returns workperiod
    return ctx.db.mutation.deleteExpense({ where: { id: args.id } }, info);
  },
  // Confirms an expense
  async confirmExpense(parent, args,ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    const { userId } = ctx.request;
    const expense = await ctx.db.mutation.updateExpense(
      {
        data: {
          confirmedBy: {
            connect: { id: userId } //temp
          },
        }
      },
    );
    return expense;
  },
  // confirms a timesheet
  async confirmTimesheet(parent, args, ctx, info) {
    const self = await ctx.db.query.account({ where: { id: ctx.request.userId } }, newInfo);
    permissionCheck(self, ["SUPERUSER", "ADMIN"]);
    const timesheet = await ctx.db.mutation.updateTimesheet(
      {
        data: {
          ...args,
          user: {
            connect: { id: "cjpc5dax760e40a966aq1a0mk" } //temp
          },
          confirmedBy: {
            connect: { id: "cjpc5dax760e40a966aq1a0mk" } // temp
          },
        }
      },
    );
    return timesheet;
  }
};

module.exports = Mutation;