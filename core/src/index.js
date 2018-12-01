require("dotenv").config({ path: "variables.env" });
const createServer = require('./createServer');
const db = require('./db');

console.log('Starting now');

const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }, }, ret => {
    console.log(`RUNNING NOW ${ret.port}`)
  });