// Stores the active TCP connection object.
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
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === 'm') {
    connection.write('Say: Move pls');
  }

  if (key === 'u') {
    connection.write('Say: SNAKES');
  }

  if (key === 'i') {
    connection.write('Say: ON');
  }

  if (key === 'o') {
    connection.write('Say: THE');
  }

  if (key === 'p') {
    connection.write('Say: PLANE');
  }
};

module.exports = {
  setupInput
}