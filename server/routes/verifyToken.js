import JsonWebToken from "jsonwebtoken";

//middleware function
function verifier (req,res,next){
    const token = req.header('authToken');
    if(!token){
        return res.status(401).send("Access Denied");
    }

    try{
        const verified = JsonWebToken.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
    }catch(err){
        res.status(400).send('Invalid Token')


    }

}