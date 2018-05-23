const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const app = express();

// http://wp-education.xoothemes.com/


// Configuration
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connect
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url).then(() => {
  console.log("Sucessfully connected to the database");
}).catch((error) => {
  console.log("Error connecting to the database: " + error);
  process.exit();
});

// Path Routing Declaration
cursos = require('./cursos/cursos-router');
app.use('/cursos', cursos);

// Server Listen
app.listen(8080, () => {
  console.log("Server ouvindo porta 8080");
});