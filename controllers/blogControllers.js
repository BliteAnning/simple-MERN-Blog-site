 const Blog = require('../models/blogs.js');


//Get all blogs
const allBlogs = (req, res) => {
    Blog.find().sort({createdAt: -1}) //arranges the blog from the newest to the oldest blog
     .then((result) => {
        res.render('index', {title: 'All blogs', blogs: result})
     })
     .catch((err) => {
        console.log(err)
     })
}


//Get a specific blog
const singleBlog = (req, res) => {
    const id =req.params.id;
    Blog.findById(id)
     .then((result) =>{
        res.render('details',{title: "Blog details", blog: result});
     })
     .catch((err)=>{
        console.log(err);
     });
}

//Delete a blog
const deleteBlog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/blogs'}); // cannot redirect an ajax request in a server so send response as a json
    })
    .catch(err=>{
        console.log(err);
    });
}


//add a blog
const postBlog = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
     .then((result)=>{
        res.redirect("/blogs")
     })
     .catch((err) =>{
        console.log(err);
     });
}

//create a blog
const createBlog = (req, res) => {
    res.render('create', {title:'Create a blog'});
}

//update a blog
const updateBlog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, {})
     .then(result => {

     })
}

module.exports = {
    postBlog, allBlogs, singleBlog, deleteBlog, createBlog
}