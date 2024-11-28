const express = require('express');
const controller = require('../controllers/blogControllers');
const router = express.Router();


//get all blogs
router.get('/', controller.allBlogs)

router.get('/create', controller.createBlog);
//deleting a blog using the ajax form
router.delete('/:id',controller.deleteBlog );

//getting post requests into the server or create a post
router.post('/',controller.postBlog);

//retrieving a specific blog using id
router.get('/:id', controller.singleBlog);

//creating a new blog
router.get('/create', controller.createBlog);

module.exports = router;