const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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