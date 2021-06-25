const express = require("express")
const router = express.Router()

const User = require("../models/User")

router.get("/", (req, res, next)=>{
    User.findAll().then((data) =>{
        res.status(200).send(data)
    })
})


router.get("/search", (req, res, next)=>{
    User.findAll({
        where : req.query
    }).then((data) =>{
        res.status(200).send(data)
    })
})



module.exports = router