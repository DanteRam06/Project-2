if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
const helpers = require('./utils/helpers');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bcrypt = require('bcrypt')
const passport = require('passport')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_ENV,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
//Display homepage
app.get('/', (req, res) => {
    res.render('index.html', { name: req.user.name});
});

//Display login page
app.get('/', (req, res) => {
    res.render('sign-in.html');
});

app.post('/sign-in', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: 'sign-in',
    failureFlash: true
}))

//Display register page
app.get('/', (req, res) => {
    res.render('register.html');
    try {
        const hashedPassword = brypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: rwq.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/sign-in')
    } catch {
        res.redirect('/register')
    }
    req.body.email
});

app.delete('/logout', (req, res) => {
    req.logOut()
    req.redirect('/login')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/sign-in')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));