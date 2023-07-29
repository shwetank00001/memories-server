const  mongoose  = require('mongoose')
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
    try {
        const createdPost = await PostMessage.create(req.body)
        res.send(createdPost).status(201)
    } catch (error) {   
        res.status(400).json({msg:error})
    }
}


async function updatePost(req, res){
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

const ghasf = () => {

}
// async function updatePost(req,res){
//          // We always take id from req.params  ,, we destructure it since we want to assign _id (the mongo sv id) to id (the one we are giving a var to.)

//     try {
//         const { id: postID } = req.params
//         const updatedPost = await PostMessage.findByIdAndUpdate({ _id: postID })

//         if(!updatedPost){
//             res.send("No post with id", id)
//         }
//         res.send(updatedPost)
//     } catch (error) {
//         console.log("None found with the id")
//     }
// }

async function deletePost(req,res){
    try {
        const { id : postID } = req.params
        const deleteItem = await PostMessage.findByIdAndDelete({ _id: postID })
        if(!deleteItem){
            res.send("Item Not Present")
        }
        res.json(deleteItem)
    } catch (error) {
        console.log("Item not present")
    }
}

async function likePost(req,res){
    try {
        const { id } = req.params
        const post = await PostMessage.findById(id)
        const updatedPost = await PostMessage.findByIdAndUpdate( id , { likeCount: post.likeCount + 1}, {new: true})
        res.json(updatedPost)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}