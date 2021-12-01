// Stores the active TCP connection object.
const {keyboard} = require('./constants');
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (keyboard[key] === '\u0003') {
    process.exit();
  } else if (keyboard[key]) {
    connection.write(keyboard[key])
  }

};

module.exports = {
  setupInput
}