const express = require('express')
const route = express.Router()

const { getPosts,createPost, updatePost, deletePost } = require('../controller/posts')

route.get('/', getPosts)
route.post('/', createPost)
route.patch('/:id', updatePost)
route.delete('/:id', deletePost)


module.exports = route  