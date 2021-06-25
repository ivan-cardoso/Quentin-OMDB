const db = require("../db")
const S = require("sequelize")
const bcrypt = require("bcrypt")

class User extends S.Model {}

User.init(
    {
    email : {
        type : S.STRING,
        allowNull: false, 
    },
    password : {
        type : S.STRING,
        allowNull: false, 
    },
    username : {
        type : S.STRING,
        // set(){
        //     return this.email ? this.email.split("@")[0] : ""
        // }
    },
    salt : {
        type : S.STRING
    }
    }, 
    {sequelize : db, modelName : "users"}
)

User.prototype.hash = function(password, salt){
    return bcrypt.hash(password, salt)
}

User.beforeCreate((user)=>{
    return bcrypt.genSalt(12)
    .then((salt)=>{
        user.salt = salt
        return user.hash(user.password, salt)
    })
    .then((hash) =>{
        user.password = hash
    })
}) 

User.addHook("beforeCreate", (user)=>{
    user.username = user.email.split("@")[0]
})

module.exports = User