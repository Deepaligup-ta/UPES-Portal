import { Post } from '../models/Post.js'
import { User } from '../models/User.js'

export const createPost = (req, res) => {
    const userId = req.auth._id
    console.log(userId)
    const { title, excerpt, to, text, status, type, attachmentFile } = req.body
    User
        .findOne({ _id: userId })
        .then((user) => {
            console.log(user)
            if(!user)
                return res.status(400).json({
                    error: true
                })
            if(type === 'Policy' && user.role !== 'management')
                return res.status(401).json({
                    error: true,
                    errorMessage: 'You are not authorized to change!'
                })

            const newdata = {
                title: title,
                to: (to ? to : null),
                excerpt: excerpt,
                type: type,
                attachmentFile: (attachmentFile ? attachmentFile : null),
                content: (text ? text : null),
                status: ( !status ? "publish": `${status}`),
                school: user.school,
                author: userId
            }
            console.log(newdata)
            const newpost = new Post(newdata)

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
    if(req.body.attachmentFile === '')
        delete req.body.attachmentFile
    const userId = req.auth._id
    const postId = req.body._id
    Post
        .findOne({ _id: postId })
        .select("-attachmentFile")
        .populate("author")
        .then((post) => {
            if(!post)
                return res.status(400).json({
                    error: true
                })

            if(String(post.author._id) !== userId)
                return res.status(401).json({
                    error: true,
                    errorMessage: "You are not allowed!"
                })
            // if(type === 'Policy' && post.author.role !== 'management')
            //     return res.status(401).json({
            //         error: true,
            //         errorMessage: 'You are not authorized to change!'
            //     })
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
    const postId = req.body.postId
    Post
        .findOne({ _id: postId  })
        .then((post) => {
            if(!post)
                return res.status(400).json({
                    error: true
                })
            if(String(post.author) !== String(userId)){
                return res.status(401).json({
                    error: true,
                    errorMessage: "You are not allowed!"
                })
            }
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
        .findOne({ _id: postId })
        .populate({ path: 'author', select: 'firstName lastName sapId designations'})
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
    const { type } = req.query
    const userId = req.auth._id
    if(!type)
        return res.status(400).json({
            error: true,
            errorMessage: 'Expected "type" as the query '
        })
    const pageOptions = {
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        sort: { createdAt: -1 },
        select: '-attachmentFile',
        populate: { path: 'author', select: 'firstName sapId designations' }
    }
    const queryDB = {
        status: 'publish',
        type: type,
        $or: [
            {to: (userId ? userId : '')},
            {to: []}
        ]
    }
    if(type === 'Policy')
        delete queryDB.$or 
    Post
        .paginate(queryDB, pageOptions, (err, result) => {
            if(err)
                return res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            res.json(result)
        })
   
}
