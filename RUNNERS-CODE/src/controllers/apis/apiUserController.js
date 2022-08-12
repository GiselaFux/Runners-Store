// para trabajar con la DB
const db = require("../../database/models");

const bcrypt = require("bcryptjs");

module.exports={
    list:(req, res)=>{
      db.Users.findAll()
      .then(users=>{
        return res.json({total:users.length,
                         data: users,
                        status:200})
        
      })
    },
    detail:(req, res)=>{
      db.Users.findByPk(req.params.id)
      .then(user=>{
        return res.status(200).json({
                         data: user,
                        status:200})
        
      })
    }
  
   }
  
  
  
  