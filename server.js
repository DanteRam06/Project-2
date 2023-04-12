const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
const helpers = require('./utils/helpers');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//Display homepage
app.get('/', (req, res) => {
    res.render('index.html');
});

//Display login page
app.get('/', (req, res) => {
    res.render('sign-in.html');
});

//Display register page
app.get('/', (req, res) => {
    res.render('register.html');
});

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));