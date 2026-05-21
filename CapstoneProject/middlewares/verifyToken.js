import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token
        if (!token) {
            return res.status(401).json({ message: "Unauthorized request. please login" })
        }

        // verify and decode token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        // attach decoded payload for downstream handlers
        req.user = decodedToken
        res.locals.user = decodedToken

        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized request. please login" })
    }
}

