const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const routes = require('./routes/BlogRouter.js');

//express app
app = express();

//connect mongodb
const db ='mongodb+srv://Brown:test123@backend.a6pey.mongodb.net/tutorial-blog?retryWrites=true&w=majority&appName=backend'
mongoose.connect(db)
  .then((result) => app.listen(3000)) //listen to a request from the server
  .catch((err) => {
    res.status(404).render('404', {title:'page not found'})
  });

//register a template engine
app.set('view engine', 'ejs');




//middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); // parse the req body into Javascript object which is stored in the req.body

/*adding a new blog to the database
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'my new blog',
        body: 'This blog is for everyone using the node.js file'
    })
    blog.save()
     .then((result)=>{
        res.send(result)
     })
     .catch((err) =>{
        console.log(err);
     });
})
app.get('./all-blogs', (req, res) => {
    Blog.find()
     .then((result) =>{
        re.send(result)
     })
     .catch((err) =>{
        console.log(err);
     })
}) */
app.use((req, res, next) => {
    console.log('moving to the next item');
    next();
});


//routes
app.get('/', (req, res) => {
    res.redirect('./blogs') // redirects the home page to the blogs page
});

//blogs router
app.use('/blogs',routes)

//pages route

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});
app.use( (req, res) => {
    res.status(404).render('404', {title:'page error'});
});

