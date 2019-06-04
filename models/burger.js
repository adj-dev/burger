// Dependencies
const orm = require('../config/orm');

/*
model this AFTER THE INCLASS EXAMPLE TO DKSFJALDKJF LKFJLKD JFLSK J!!!!!!!!!!!!!!
*/

// Call the methods from orm with burger data. 
// The methods return data that can be exported to the controller?
// Then the controller will render the data onto the screen via props into handlebars?
const burger = {
  getAll: function (callback) {
    orm.selectAll(result => {
      // Format the result for easier handling down the chain
      let devoured = [];
      let notDevoured = [];
      result.forEach(burger => {
        if (burger.devoured) {
          devoured.push(burger);
          return;
        }
        notDevoured.push(burger);
      });

      return callback({ devoured, notDevoured });
    });
  },
  addOne: function (burger, callback) {
    // input validation
    if (!burger) {
      let errorMessage = 'Please enter a valid burger';
      return callback(errorMessage);
    }
    orm.insertOne(burger, () => {
      callback();
    });
  },
  devour: function (id, callback) {
    orm.updateOne(id, () => {
      callback();
    })
  }
}






module.exports = burger;
