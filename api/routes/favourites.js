const express = require("express")
const router = express.Router()

const {Favourites} = require("../models/")

router.get("/:id", (req, res, next)=>{
    Favourites.findAll({
        where : {
            userId : req.params.id
        }})
        .then((data) =>{
        res.status(200).send(data)
    })
    .catch((err)=> next(err))
})

router.post("/", (req, res, next)=>{
    Favourites.create(req.body)
    .then((data) => res.status(201).send(data))
    .catch(err => console.log("FAVOURITE ERROR", err))
})

router.delete("/:userId/:id", (req, res, next)=>{
    return Favourites.destroy({
        where : {
            id : req.params.id 
        }
    })
    .then((remove) =>{
        return Favourites.findAll({
            where : {
                userId : req.params.userId
            }
        })
    })
    .then((data) => {
        return res.status(200).send(data)
    })
    .catch(err => console.log("ERR REMOVE FAV", err))
})



module.exports = router