var express = require('express');
var router = express.Router();
const Admin = require('../../models/admin')

router.get('/', async function(req, res, next) {
    const {username, password} = req.body

    const userExist = await Admin.findOne({username})
  
    if(userExist){
      res.status(403).json({message: 'Admin already exists'})
    }
  
    const token = generateJwtToken({username, password})
  
    const admin = new Admin({username, password})
  
    await admin.save()
    
    const payload = {
       message: 'Admin created successfully',
       token
    }
  
    res.json(payload)
  
});

module.exports = router;
