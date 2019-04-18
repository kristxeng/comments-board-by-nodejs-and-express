


//const user = require('./user-setting');
//console.log('user:', user);
const username = require('./user-setting').username;
const password = require('./user-setting').password;

//console.log('u+p;', username, password);

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
