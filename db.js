const username = require('./user-setting').username;
const password = require('./user-setting').password;

var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: username,
  password: password,
  database: "mentor_program_db",
  multipleStatements: true
});

conn.connect(function(err) {
  if (err) {
    console.log('connecting error');
    console.log(err)
    return;
  }
  console.log('connecting success');
});

module.exports = {
  conn: conn,
  usersTable: 'kristxeng_users',
  cmmtsTable: 'kristxeng_comments2'
}
