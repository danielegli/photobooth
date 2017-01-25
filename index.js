const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exphbs({
  defaultLayout: 'thumbnail-gallery',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')

app.get('/', (request, response) => {
  response.render('home', {
    name: 'John'
  })
})

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
