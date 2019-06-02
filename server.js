// Dependencies
const express = require('express');
const hbs = require('express-handlebars');



// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;



// Configure the Express view engine to use handlebars
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');



// Spin up the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));