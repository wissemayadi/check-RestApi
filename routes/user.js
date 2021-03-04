const User = require('../models/user');
const express = require('express');

var router = express.Router();

//@Api http:localhost:6500/api/users
//@des add new user
//@access public



router.post('/', (req, res) => {
    const newUser = new User({ ...req.body });
    newUser.save().then(() => {

        res.send("nutzer hat erfolgreich hinzugefugt")
            .catch((err) => res.send(err))

    })

})


//@Api http:localhost:6500/api/users
//@des get all user
//@access public


router.get('/',(req,res)=>{
User.find().
then((users)=>{
res.send((users))
.catch((err)=>res.send(err))
})

})
//@Api http:localhost:6500/api/users/id
//@get  user byId
//@access public

router.get('/:_id',(req,res)=>{

    let {_id} =req.params;
User.find({_id})
.then((user)=>res.send(user))
.catch((err)=>res.send(err))
})
//@Api http:localhost:6500/api/users/id
//@desc delete  user byId
//@access public

router.delete('/',(req,res)=>{
let {_id}=req.params;
User.findByIdAndDelete({_id})
.then(()=>
res.send("user hat geloscht"))
.catch((err)=>
res.send(err))
})
//@Api http:localhost:6500/api/users/id
//@desc update user by id 
//@access public

router.put(`/:_id`,(req,res)=>{
let {_id}=req.params;
User.findByIdAndUpdate({_id},{$set:{...req.body}})
.then(()=>res.send("alles klar updated")).catch((err)=>

res.send(err))

})


module.exports = router;