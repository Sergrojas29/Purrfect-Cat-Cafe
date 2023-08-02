const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  //   Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/home-routes'))

 app.use(session(sess));

app.use(routes);



sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT}`
    )
  );
});

