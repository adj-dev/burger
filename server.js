// Dependencies
const express = require('express');
const hbs = require('express-handlebars');



// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;



// Configure express to use handlebars
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');



// Spin up the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));