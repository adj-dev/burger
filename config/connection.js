// Dependencies
const mysql = require('mysql');



// Configure connection settings
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    database: 'burgers_db',
    user: 'root',
    password: 'root'
  });
};



/*
Store mysql's connect method in a function. This allows the app to request 
a connection to the database from wherever the function is imported. 
*/
function connectDB() {
  connection.connect(err => {
    if (err) throw err;
    console.log(`Connected on thread ${connection.threadId}`);
  });
};



// Export the connect function as a module
module.exports = { connection, connectDB };
