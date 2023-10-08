import { Post } from '../models/Post.js'
import { User } from '../models/User.js'

export const createPost = (req, res) => {

    const userId = req.auth._id
    const { title, excerpt, content, status } = req.body
    User
        .findOne({ _id: userId })
        .then((user) => {
            if(!user)
                return res.status(400).json({
                    error: true
                })

            const newpost = new Post({
                title: title,
                excerpt: excerpt,
                content: content,
                status: ( !status ? "publish": `${status}`),
                school: user.school,
                author: userId
            })

            newpost
                .save()
                .then((post) => {
                    if(!post)
                        return res.status(400).json({
                            error: true
                        })
                    res.json(post)
                })
                .catch((error) => {
                    res.status(400).json({
                        error: true,
                        errorMessage: error
                    })
                })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })

}

export const updatePost = (req, res) => {
    const userId = req.auth._id
    const postId = req.body._id
    Post
        .findOne({ _id: postId })
        .then((post) => {
            if(!post)
                return res.status(400).json({
                    error: true
                })

            if(String(post.author) !== userId)
                return res.status(401).json({
                    error: true,
                    errorMessage: "You are not allowed!"
                })
            
            Post
                .updateOne({ _id: postId }, req.body)
                .then((update) => {
                    if(!update)
                        return res.status(400).json({
                            error: true
                        })

                    res.json({
                        success: true,
                        dbResponse: update
                    })
                })
                .catch((error) => {
                    res.status(400).json({
                        error: true,
                        errorMessage: error
                    })
                })
          
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const deletePost = (req, res) => {
    const userId = req.auth._id
    const postId = req.body._id
    Post
        .findOne({ _id: postId  })
        .then((post) => {
            if(!post)
                return res.status(400).json({
                    error: true
                })

            if(String(post.author) !== userId)
                return res.status(401).json({
                    error: true,
                    errorMessage: "You are not allowed!"
                })
            
            Post
                .updateOne({ _id: postId }, { status: "delete" })
                .then((update) => {
                    if(!update)
                        return res.status(400).json({
                            error: true
                        })

                    res.json({
                        success: true,
                        dbResponse: update
                    })
                })
                .catch((error) => {
                    res.status(400).json({
                        error: true,
                        errorMessage: error
                    })
                })
          
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const getPost = (req, res) => {
    const postId = req.params.postId

    Post
        .findOne({ _id: postId, status: "publish" })
        .populate({ path: 'author', select: '-encpy_password-salt'})
        .then((post) => {
            if(!post)
                return res.status(400).json({
                    error: true
                })
            res.json(post)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const getPosts = (req ,res) => {

    Post
        .find({ status: ["publish"] })
        .populate({ path: 'author', select: 'firstName'})
        .then((posts) => {
            if(!posts)
                return res.status(400).json({
                    error: true
                })
            res.json(posts)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

