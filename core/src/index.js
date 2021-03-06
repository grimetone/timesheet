require("dotenv").config({ path: "variables.env" });
const createServer = require('./createServer');
const db = require('./db');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

console.log('Starting now');

const server = createServer();

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
next();
});

server.express.use(async (req, res, next) => {
  if (!req.userId) return next();
  const user = await db.query.account(
    { where: { id: req.userId } },
    "{ id, permissions, email, name }"
  );
  req.user = user;
  next();
});

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }, }, ret => {
    console.log(`RUNNING NOW ${ret.port}`)
  });