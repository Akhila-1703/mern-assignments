import exp from 'express'
import { register,authenticate } from '../services/authService.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import cookieParser from 'cookie-parser'
import { ArticleModel } from '../models/ArticleModel.js'

export const userRoute = exp.Router()

//register user
userRoute.post('/users', async (req, res) => {
    //get user obj from req
    let userObj = req.body
    //call register
    const newUserObj = await register({ ...userObj, role: "USER" })
    //send res
    res.status(201).json({message:"user created",payload:newUserObj})
})


// read all articles (protected)
userRoute.get("/articles/:userId", verifyToken, async (req, res) => {
    const { userId } = req.params

    // currently articles are filtered by active state only
    // (userId can be used later if you want per-user filtering)
    const articles = await ArticleModel.find({ isArticleActive: true })
    res.status(200).json({ message: "Articles fetched", payload: articles })
})


// add comment to an article (protected)
userRoute.post('/articles', verifyToken, async (req, res) => {
    const { articleId, comment } = req.body

    if (!articleId) {
        return res.status(400).json({ message: "articleId is required" })
    }
    if (!comment || typeof comment !== 'string') {
        return res.status(400).json({ message: "comment must be a non-empty string" })
    }

    const article = await ArticleModel.findById(articleId)
    if (!article || article.isArticleActive === false) {
        return res.status(404).json({ message: "Article not found" })
    }

    // schema expects { user, comment }
    const { userId: commenterId } = req.user || {}
    article.comments.push({ user: commenterId, comment })
    const updatedArticle = await article.save()

    res.status(201).json({ message: "Comment added", payload: updatedArticle })
})

