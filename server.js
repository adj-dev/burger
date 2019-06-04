// Dependencies
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const controller = require('./controllers/burgers_controller');



// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;



// Configure Express to access req.body on POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Configure the Express view engine to use handlebars
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




// Allows main.handlebars to access public directory
app.use(express.static(path.join(__dirname, 'public')));
// Set up routing for controller
app.use('controller', controller);




// Set up server routes
app.route('/')
  .get(controller)
  .post(controller)
  .put(controller);



// Spin up the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// Export the configured Express server as a module
module.exports = app;