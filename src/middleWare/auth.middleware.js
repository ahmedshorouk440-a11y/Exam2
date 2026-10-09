
import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
  try {
    let decodeddata = jwt.verify(req.headers.token, "token")
    req.user = decodeddata;
    next()
  } catch (error) {
    res.status(401).json({ message: "User must be authenticated" })
  }
}