const authorization = (req, res, next)=>{

    const token = req.headers.authorization.split(' ')[1]
    const payload = verifyJwtToken(token)
      if(payload){
        req.user = payload
        next()
      }else{
        res.status(403).json({message: 'Not a valid user'})
      }
 
}

module.exports =  authorization;