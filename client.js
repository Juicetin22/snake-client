const net = require("net");
const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("It's go time!");
    conn.write('Name: MOO');
  //  conn.write('Move: up');
   /* setInterval(() => {
      conn.write('Say: SNAKES ON THE PLANE');
    }, 1000);*/
  });

  conn.on('data', () => {
    console.log('you ded cuz you idled or crashed');
  });

  return conn;
};

module.exports = {
  connect
}