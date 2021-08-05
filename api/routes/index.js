const express = require("express")
const passport = require("passport")
const router = express.Router()
const user = require("./user")
const favourites = require("./favourites")
const {User} = require("../models/")

router.use("/users", user)
router.use("/favourites", favourites)

router.post("/register", (req, res, next) =>{
    User.create(req.body)
    .then((data) => res.status(201).send(data))
    .catch((err)=> next(err))
})

router.post("/auth", passport.authenticate("local"), (req, res)=>{
    return res.send(req.user)
})

router.post("/logout", (req, res)=>{
    req.logOut()
    res.sendStatus(200)
})

router.get("/me", (req, res)=>{
    if(!req.user){
        return res.sendStatus(401)
    }
    res.send(req.user)
    .catch((err)=> next(err))
})

module.exports = router

