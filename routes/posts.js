const express = require('express')
const route = express.Router()

const { getPosts,createPost } = require('../controller/posts')

route.get('/', getPosts)
route.post('/', createPost)


module.exports = route  