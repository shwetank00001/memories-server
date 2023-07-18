const PostMessage = require('../models/postMessage')

async function getPosts(req,res){
    try {
        const getPost = await PostMessage.find()
        res.send(getPost).status(200)
    } catch (error) {
        res.send({ message: error.message }).status(400)
    }
}

async function createPost(req,res){
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        // const create = await PostMessage.create(post)
        // res.status(200).json(create)
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(400).json({msg:error})
    }
}


module.exports = {
    getPosts,
    createPost
}