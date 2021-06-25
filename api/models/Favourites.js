const db = require("../db")
const S = require("sequelize")
const bcrypt = require("bcrypt")

class Favourites extends S.Model {}

Favourites.init(
    {
        movieId: {
            type: S.STRING,
        }, 
        title: {
            type: S.STRING,
        }, 
        img: {
            type: S.STRING,
        }
    },
    { sequelize: db, modelName: "favourites" }
)


module.exports = Favourites