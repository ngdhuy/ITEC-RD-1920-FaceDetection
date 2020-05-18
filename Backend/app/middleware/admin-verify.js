

const db = require("../models");
const Account = db.account;
const Op = db.Sequelize.Op;

const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    
        const token=req.headers.authorization.split(" ")[1];
        // console.log(token)
       
        jwt.verify(token, 'secret_key', (err, decoded) => {
          if (err) {
            return res.status(401).send({
              message: "Unauthorized!"
            });
          }
          req.accountID = decoded.account_id;
          req.accountRole = decoded.role;
          Account.findByPk(decoded.account_id).then(data => {
            if(data.account_type === "admin")
            {
                  next();
                  return;
                
              }
              else{
                res.status(403).send({
                  message: "Require Admin Role!"
                });
                return; 
              }
              })
        });
       
    } 
   


// module.exports= (req, res, next) => {
  
//   Account.findByPk(req.account_id)
//     .then(user => {
//       user.getRoles().then(account => {
//         for(let i=0; i<account.length; i++){
//           console.log(account[i].account_type);
//           if(account[i].account_type.toUpperCase() === "ADMIN"){
//             next();
//             return;
//           }
//         }
        
//         res.status(403).send("Require Admin Role!");
//         return;
//       })
//     })
// }

// module.exports= (req, res, next) => {
//   // -> Check Username is already in use
//   Account.findOne({
//     where: {
//       // username: req.body.username,
      
//       account_type:'admin'
//     } 
//   }).then(user => {
//     // if(!user){
//     //   res.status(400).send("Fail -> Not allowed user type!");
//     //   return;

//     // }
        
//     next();
//   });

// }




  
