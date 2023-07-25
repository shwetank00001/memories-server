const express = require('express')
const route = express.Router()

const { getPosts,createPost, updatePost } = require('../controller/posts')

route.get('/', getPosts)
route.post('/', createPost)
route.patch('/:id', updatePost)


module.exports = route  