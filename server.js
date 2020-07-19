const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());


app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir:  './views/layouts'
  }));
  app.set('view engine', '.hbs');
  app.set('views',  './views');
  

app.get('/', (req, res) => res.sendFile('D:/Code/Websites/Reddit Clone/template.html'));
app.get('/posts/new', function (req, res) {

    res.render('posts-new.hbs')
  });
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

require('./controllers/posts.js')(app);
// Set db
require('./data/reddit-db');