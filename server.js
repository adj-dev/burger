// Dependencies
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');



// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;



// Configure the Express view engine to use handlebars
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



// TEMPORARY ROUTER
app.get('/', (req, res) => {
  res.render('index');
})


// Allows main.handlebars to link to style.css 
app.use(express.static(path.join(__dirname, 'views')));



// Spin up the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));