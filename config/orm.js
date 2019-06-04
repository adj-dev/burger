// Dependencies
const { connection, connectDB } = require('./connection');



// Request a connection to MySQL
connectDB();



const orm = {
  // Fetches all rows from MySQL database
  selectAll: function (callback) {
    connection.query(
      'SELECT * FROM burgers;',
      function (err, result) {
        if (err) throw err;
        // Remove wrapper
        let burgers = result.map(burger => {
          let { id, burger_name, devoured } = burger;
          return { id, burger_name, devoured };
        });

        return callback(burgers);
      }
    )
  },

  insertOne: function (burger_name, callback) {
    connection.query(
      'INSERT INTO burgers (burger_name) VALUES (?);',
      [burger_name],
      function (err, result) {
        if (err) throw err;
        return callback();
      }
    )
  },

  updateOne: function (id, callback) {
    connection.query(
      'UPDATE burgers SET devoured = true WHERE id = ?',
      [id],
      function (err, result) {
        if (err) throw err;
        return callback();
      }
    )
  }
}



// Export these methods as a module
module.exports = orm;