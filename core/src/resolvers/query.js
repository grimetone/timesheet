const Query = {
  // Returns all users(accounts)
  async users(parent, args, ctx, info) {
    return ctx.db.query.accounts({}, info);
  }
};

module.exports = Query;