export const authMiddleware = (req, res, next) => {
    if(!req.auth().isAuthenticated) {
        return res.status(401).json({message:"Not authorized"});
    }
    next();

}
