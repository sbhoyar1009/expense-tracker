const jwt= require("jsonwebtoken")

exports.auth = async(req,res,next)=>{

    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = await jwt.verify(token,process.env.SECRET)
    req.user = decodedToken;
    res.json(decodedToken)
}