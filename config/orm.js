// Dependencies
const { connection, connectDB } = require('./connection.js');



// Request a connection to MySQL
connectDB();



// Fetches all rows from MySQL database
function selectAll() {
  connection.query(
    'SELECT * FROM burgers;',
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  )
}




function insertOne(burger_name) {
  connection.query(
    'INSERT INTO burgers (burger_name) VALUES (?);',
    [burger_name],
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  )
}




function updateOne(burger_name) {
  connection.query(
    'UPDATE burgers SET devoured = true WHERE ?',
    [{ burger_name }],
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  )
}



// Export these methods as a module
module.exports = { selectAll, insertOne, updateOne };