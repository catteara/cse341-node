const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
//handlebars set-up with .hbs
    // app.engine(
    //     'hbs', 
    //     expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout',
    //     extname: 'hbs'
    // }));
    // app.set('view engine', 'hbs');
//next line only needed if folder is not named "views", for example if the folder was names templates... app.set('views', 'templates');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

//404 Error page
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);
